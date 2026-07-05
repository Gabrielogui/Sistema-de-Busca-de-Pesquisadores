import api from './api';
import { Pesquisador } from '@/core/researcher';

// |=======| GET DE UM PESQUISADOR DETALHADO (COM PRODUÇÕES) |=======|
export function getPesquisadorPorId(id: string) {
    return api.get<Pesquisador>(`/pesquisadores/${id}`);
}