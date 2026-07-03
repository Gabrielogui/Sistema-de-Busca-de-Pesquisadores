import { ResearchGroup, ResearchGroupFilters } from '@/core/researchGroup';
import { PaginatedResponse } from '@/core/pagination';
import api from './api';

// |=======| GET DA LISTA PAGINADA DE GRUPOS DE PESQUISA |=======|
export function getListaGruposPesquisa(filters: ResearchGroupFilters) {
    return api.get<PaginatedResponse<ResearchGroup>>('/grupos-pesquisa', {
        params: filters,
    });
}

// |=======| GET DE UM GRUPO DE PESQUISA ESPECÍFICO PELO ID |=======|
export function getGrupoPesquisaPorId(id: string) {
    return api.get<ResearchGroup>(`/grupos-pesquisa/${id}`);
}