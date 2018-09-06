export const FILMDETAILS_WILL_LOAD = "FILMDETAILS_WILL_LOAD"
export const FILMDETAILS_LOADED = "FILMDETAILS_LOADED"

export const onLoadFilmDetails = (id) => ({ type: FILMDETAILS_WILL_LOAD, payload: id})