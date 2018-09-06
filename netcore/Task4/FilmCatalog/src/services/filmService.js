import { baseUrl } from '../constants/baseUrl';
import toastr from 'toastr';
import * as httpRequest from '../helpers/httpRequestHelper';

export function getAllFilms() {
    return httpRequest.get(`${baseUrl}/api/films/all`)    
         .then(function(res) {
            if (res.data.data) {
                const films = res.data.data;
                return films;
            }
            else if(res.data.error) {
                window.location.replace("/");
                toastr.clear();
                toastr.error(res.data.error);
            }
            toastr.error("Failed film loading:" + res.data.errorMessage);
        })
        .catch(function(e) {
            
            toastr.clear();
            toastr.error("Failed films loading:" + e.message);
        })  
}

export function getFilmsDetails(id) {
    return httpRequest.get(`${baseUrl}/api/films/${id}`)
        .then(function(res) {
            if(res.data.data) {
                const film = res.data.data;
                return film;
            }
        })
        .catch(function(e) {
            toastr.clear();
            toastr.error("Failed film loading:" + e.message);
            window.location.replace("/");
        })
}

export function getFilmsFromCategory(category) {
    return httpRequest.get(`${baseUrl}/api/films/all/${category}`)    
         .then(function(res) {
            if (res.data.data) {
                const films = res.data.data;
                return films;
            }
            else if(res.data.error) {
                window.location.replace("/");
                toastr.clear();
                toastr.error(res.data.error);
            }
            toastr.error("Failed film loading:" + res.data.errorMessage);
        })
        .catch(function(e) {
            
            toastr.clear();
            toastr.error("Failed films loading:" + e.message);
        })  
}

export function getFilmIdFromUrl() {
    const idFromUrl = window.location.href.toString().split('/')[4];
    if(!isNaN(idFromUrl)) {
        return idFromUrl
    }
    else {
        toastr.clear();
        toastr.error("Incorrect Url");
        window.location.replace(`/`);
    }
}