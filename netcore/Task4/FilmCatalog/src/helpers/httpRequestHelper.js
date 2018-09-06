import axios from 'axios';

function setAuthorizationToken() {
    const token = sessionStorage.getItem('jwt_token');
    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } 
}

export function post(url, userData) {
    setAuthorizationToken();

    return axios.post(url, userData);
}

export function get(url) {
    setAuthorizationToken();

    return axios.get(url);
}

export function put(url) {
    setAuthorizationToken();

    return axios.put(url);
}
