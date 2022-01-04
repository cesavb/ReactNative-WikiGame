import axios from "axios";

const baseURL  = 'https://api.igdb.com/v4'

const api = axios.create({
    baseURL: baseURL
});

export default api ;