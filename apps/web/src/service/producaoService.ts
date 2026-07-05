import api from './api';
import { ProducaoDetalhe, ProducaoFilters } from '@/core/producao';
import { PaginatedResponse } from '@/core/pagination';

// |=======| GET LISTA LÉXICA DE PRODUÇÕES |=======|
export function getListaProducoes(filters: ProducaoFilters) {
    return api.get<PaginatedResponse<ProducaoDetalhe>>('/producoes', {
        params: filters,
    });
}

// |=======| GET BUSCA SEMÂNTICA DE PRODUÇÕES |=======|
export function getProducoesBuscaSemantica(q: string, page = 1, size = 30) {
    return api.get<PaginatedResponse<ProducaoDetalhe>>('/producoes/busca-semantica', {
        params: { q, page, size },
    });
}