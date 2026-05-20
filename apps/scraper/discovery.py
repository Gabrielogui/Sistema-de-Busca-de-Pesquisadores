import os
import time
import sqlite3
import logging
import re
from playwright.sync_api import sync_playwright

DATA_DIR = "./apps/scraper/data"
DB_FILE = f"{DATA_DIR}/scraper_estado.db"
DISCOVERY_LOG = f"{DATA_DIR}/discovery.log"

os.makedirs(DATA_DIR, exist_ok=True)

logger = logging.getLogger("DiscoverySonda")
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - [%(levelname)s] - %(message)s')

stdout_handler = logging.StreamHandler()
stdout_handler.setFormatter(formatter)
logger.addHandler(stdout_handler)

file_handler = logging.FileHandler(DISCOVERY_LOG, encoding="utf-8")
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS fila_extracao (
            termo_busca TEXT PRIMARY KEY,
            status TEXT DEFAULT 'PENDENTE',
            tentativas INTEGER DEFAULT 0,
            ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    return conn

def salvar_id_banco(conn, identificador):
    cursor = conn.cursor()
    try:
        cursor.execute('''
            INSERT INTO fila_extracao (termo_busca, status) 
            VALUES (?, 'PENDENTE')
        ''', (identificador,))
        conn.commit()
        logger.debug(f"ID Extraida e Mapeada para Fila PENDENTE: {identificador}")
    except sqlite3.IntegrityError:
        # Mecanismo idempotente para nao travar script caso ele passe sobre um grupo duas vezes
        pass

def run_discovery():
    conn = init_db()
    logger.info("Sonda de Descoberta Inicializada. Conectando API CNPq/Lattes.")

    with sync_playwright() as p:
        # Recomendavel headless=True para escalabilidade, e False caso deseje inspecionar as abas abrindo e fechando no monitor
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        page.goto("http://dgp.cnpq.br/dgp/faces/consulta/consulta_parametrizada.jsf", timeout=60000)

        logger.info("Sonda pronta no gateway de pesquisa. Parametros em BRANCO serao inseridos para Dump do DB Nacional.")
        # Como o termo ficara vazio, o Lattes aciona "SELECT *" trazendo todos os milhares de grupos
        page.click("button[id='idFormConsultaParametrizada:idPesquisar']")
        
        page.wait_for_selector(".itemConsulta", timeout=30000)

        pagina_atual = 1
        
        while True:
            logger.info(f"--> Inspecionando Indexador de Tabela - Pagina {pagina_atual} <--")
            time.sleep(2) # Respiro para renderizacao JSF e bloqueios 429 temporarios
            
            # Ancorar o seletor universal dos links 
            botoes_espelho = page.locator("a[id*='idBtnVisualizarEspelhoGrupo']").all()
            
            for btn in botoes_espelho:
                try:
                    # Expect page para forçar o capture das abas transitorias 
                    with context.expect_page(timeout=10000) as nova_aba_info:
                        btn.click()
                    
                    aba = nova_aba_info.value
                    url_atual = aba.url
                    # Encerra imediantamente antes da arvore ser montada, para impedir sobrecarga no servidor do governo. Otimizacao nivel rede.
                    aba.close()

                    # Interceptacao Lexica dos Numeros de Identificacao (IDs de 16 caracteres do cnpq)
                    match = re.search(r'espelhogrupo/(\d{16})', url_atual)
                    if match:
                        salvar_id_banco(conn, match.group(1))

                except Exception as e:
                    logger.error(f"Instabilidade assincrona no botao. Erro em Sonda Paginadora -> Ignorando.")

            # Estrategia nativa: A rotina deve checar no HTML DOM se o span tem a string do tipo "ui-state-disabled" vinculada à "Proxima Página"
            proximo_btn = page.locator(".ui-paginator-next").first
            is_disabled = "ui-state-disabled" in proximo_btn.get_attribute("class")
            
            if is_disabled:
                logger.info("Trigger 'Disabled' alcançado. Catalogo Inteiramente Indexado. Encerramento Concluido!")
                break
            else:
                logger.info("Iteracao avulsa completa. Exigindo POST de Pagina Subsequente.")
                proximo_btn.click()
                pagina_atual += 1
                page.wait_for_selector(".itemConsulta", timeout=15000)
        
        browser.close()
    conn.close()

if __name__ == "__main__":
    run_discovery()