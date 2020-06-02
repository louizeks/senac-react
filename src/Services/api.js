import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://api-senac.herokuapp.com'
    baseURL: 'https://localhost:44382'
});

export default api;