import { baseUrl } from '../constants/baseUrl';
import toastr from 'toastr';
import * as httpRequest from '../helpers/httpRequestHelper';

export function getAllComments() {
    return httpRequest.get(`${baseUrl}/api/comments/all`)    
         .then(function(res) {
            if (res.data.data) {
                const comments = res.data.data;
                return comments;
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

export function addComment(commentData) {
    return httpRequest.post(`${baseUrl}/api/comments`, commentData)
        .then(function(res) {
           if(res.data.error) {
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