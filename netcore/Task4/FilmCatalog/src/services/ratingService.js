import { baseUrl } from '../constants/baseUrl';
import toastr from 'toastr';
import * as httpRequest from '../helpers/httpRequestHelper';

export function getFilmRating(filmId) {
    return httpRequest.get(`${baseUrl}/api/ratings/film/${filmId}`)    
         .then(function(res) {
            if (res.data.data) {
                debugger;
                const rating = res.data.data;
                return rating;
            }
            else if(res.data.error) {
                window.location.replace("/");
                toastr.clear();
                toastr.error(res.data.error);
            }
        })
        .catch(function(e) {    
            toastr.clear();
            toastr.error("Failed rating loading:" + e.message);
        })  
}

export function addRating(ratingData) {
    debugger;
    return httpRequest.post(`${baseUrl}/api/ratings`, ratingData)
        .then(function(res) {
           if(res.data.error) {
            debugger;
                window.location.replace("/");
                toastr.clear();
                toastr.error(res.data.error);
            }
        })
        .catch(function(e) {         
            toastr.clear();
            toastr.error("Failed rating loading:" + e.message);
        })  
}