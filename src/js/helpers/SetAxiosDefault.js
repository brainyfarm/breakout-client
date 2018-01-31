import axios from 'axios';

export const setBaseUrl= (token) => {
    axios.defaults.baseURL = 'break-out-server.herokuapp.com'; 
    return true;
}

export const setRequestToken = (token) => {
    axios.defaults.headers.common['token'] = token;
    return true;
}

export const setFormPostType = () => {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return true;
}