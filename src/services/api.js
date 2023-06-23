import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.252.232:3333'
    // baseURL: 'https://malitapi.azurewebsites.net'
    // baseURL: 'https://webmalit.azurewebsites.net'
});

export default api;