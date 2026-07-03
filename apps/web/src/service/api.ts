import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oda.vertb.com.br',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;