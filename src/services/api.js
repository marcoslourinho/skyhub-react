import axios from 'axios'
import * as constants from './skyhub'

const api = axios.create({
    baseURL: constants.URL,
    headers: {
        'content-type': 'application/json',
        'authorization': `${constants.TOKEN}`
    }
});

export default api;