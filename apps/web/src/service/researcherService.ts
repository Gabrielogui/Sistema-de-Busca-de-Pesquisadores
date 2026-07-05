import { PaginatedResponse } from '@/core/pagination';
import api from './api';
import { Pesquisador, PesquisadorFilters } from '@/core/researcher';

// |=======| GET DE UM PESQUISADOR DETALHADO (COM PRODUÇÕES) |=======|
export function getPesquisadorPorId(id: string) {
    return api.get<Pesquisador>(`/pesquisadores/${id}`);
}

// |=======| GET LISTA LÉXICA DE PESQUISADORES |=======|
export function getListaPesquisadores(filters: PesquisadorFilters) {
    return api.get<PaginatedResponse<Pesquisador>>('/pesquisadores', {
        params: filters,
    });
}

// |=======| GET BUSCA SEMÂNTICA DE PESQUISADORES |=======|
export function getPesquisadoresBuscaSemantica(q: string, page = 1, size = 30) {
    return api.get<PaginatedResponse<Pesquisador>>('/pesquisadores/busca-semantica', {
        params: { q, page, size },
    });
}