import axios from "axios";

const getToken = 'https://id.twitch.tv/oauth2/token'

const token = axios.create({
    baseURL: getToken
});

export default token ;