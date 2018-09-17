import { baseUrl } from '../constants/baseUrl';
import toastr from 'toastr';
import * as httpRequest from '../helpers/httpRequestHelper';

export function getAllComments(filmId) {
    return httpRequest.get(`${baseUrl}/api/comments/all/${filmId}`)    
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
            toastr.error("Failed comments loading:" + res.data.errorMessage);
        })
        .catch(function(e) {    
            toastr.clear();
            toastr.error("Failed comments loading:" + e.message);
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
        })
        .catch(function(e) {          
            toastr.clear();
            toastr.error("Failed comment loading:" + e.message);
        })  
}