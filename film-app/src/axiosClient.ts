import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    // proxy: { host: '192.168.193.12', port: 3128 },
    headers: {
        'Content-Type':'application/json'
    }
});
axios.defaults.params = {};
instance.interceptors.request.use(function (config:AxiosRequestConfig) {
     // config.params = {
     //      API_KEY:'beb36572ce908c61fa2c0585f6e2ced8'
     // }
    config.params = {...config.params, 'api_key': 'beb36572ce908c61fa2c0585f6e2ced8'}
    return config;
    }
);
export default instance;