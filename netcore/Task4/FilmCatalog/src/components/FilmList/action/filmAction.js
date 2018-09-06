export const FILMS_WILL_LOAD = "FILMS_WILL_LOAD"
export const FILMS_LOADED = "FILMS_LOADED"
export const FILMSFROMCATEGORY_WILL_LOAD = "FILMSFROMCATEGORY_WILL_LOAD"

export const onLoadFilms = () => ({ type: FILMS_WILL_LOAD })
export const onLoadFilmsCategory = (category) => ({ type: FILMSFROMCATEGORY_WILL_LOAD, payload: category })