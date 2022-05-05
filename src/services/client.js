// Importando axios de axios.
import axios from 'axios';

// Url da api do github.
const api = axios.create({
    baseURL: 'https://api.github.com/users'
});

// Exportando a api.
export default api;