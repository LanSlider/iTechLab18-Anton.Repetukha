import { baseUrl } from '../constants/baseUrl';
import toastr from 'toastr';
import jwt_decode from 'jwt-decode';
import * as httpRequest from '../helpers/httpRequestHelper';

export function logInUser(userData) {
    return httpRequest.post(`${baseUrl}/api/account/login`, userData)    
         .then(function(res) {
            if (res.data.data) {
                const token = res.data.data.access_token;
                sessionStorage.setItem('jwt_token', token);
                return jwt_decode(token);
            }
        })
        .catch(function(e) {
            toastr.clear();
            toastr.error("Failed login:" + e.message);
        })  
}

export function logOutUser() {
    sessionStorage.removeItem('jwt_token');
}

export function registerUser(userData) {
    httpRequest.post(`${baseUrl}/api/account/register`, userData)    
        .then(function() {
            toastr.clear();
            toastr.success("Successful register");
        })
        .catch(function(e) {
            toastr.clear();
            toastr.error("Failed register:" + e.message);
        })  
}

export function getInfoFromToken() {
    const token = sessionStorage.getItem('jwt_token');
    if(token) {
        const infoFromToken = jwt_decode(token);
        return { isAuth: true, name: infoFromToken.name, isLoading: false };
    }
    return { isAuth: false }
}