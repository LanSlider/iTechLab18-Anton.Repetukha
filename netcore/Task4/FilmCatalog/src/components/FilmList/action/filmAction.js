import * as filmListActionType from '../constant/filmActionType';

export const onLoadFilms = () => ({ type: filmListActionType.FILMS_WILL_LOAD })
export const onLoadFilmsCategory = (category) => ({ type: filmListActionType.FILMSFROMCATEGORY_WILL_LOAD, payload: category })