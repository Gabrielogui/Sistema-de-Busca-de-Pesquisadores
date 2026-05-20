import os
import subprocess
import sys

def orquestrar_pipeline():
    print("======================================================")
    print("  INICIANDO PIPELINE DE SCRAPING COMPLETO (LATTES/DGP)")
    print("======================================================\n")
    
    # Mapeando dinamicamente os modulos da pasta
    discovery_script = os.path.join("apps", "scraper", "discovery.py")
    scraper_script = os.path.join("apps", "scraper", "scraper.py")

    # ETAPA 1
    print("---------------------------------------------------------")
    print("⚙️ PASSO 1: Iniciando SONDA DE DESCOBERTA (Paginação Web)")
    print("---------------------------------------------------------")
    # Subprocess invoca a Sonda no seu python nativo e isola o estado de memória dela
    try:
        subprocess.run([sys.executable, discovery_script], check=True)
    except subprocess.CalledProcessError:
        print("⚠️ A Sonda identificou um erro critico no modulo discovery. Verifique.")
        return

    # ETAPA 2
    print("\n---------------------------------------------------------")
    print("⚙️ PASSO 2: Iniciando ASPIRADOR METADADOS (Gerando os .XMLs)")
    print("---------------------------------------------------------")
    try:
        subprocess.run([sys.executable, scraper_script], check=True)
    except subprocess.CalledProcessError:
        print("⚠️ Ocorreu um colapso durante a varredura da fila. O SQLite salvara o historico.")

    print("\n======================================================")
    print("          CONCLUÍDO! PIPELINE GERAL FINALIZADO          ")
    print("======================================================")

if __name__ == "__main__":
    orquestrar_pipeline()