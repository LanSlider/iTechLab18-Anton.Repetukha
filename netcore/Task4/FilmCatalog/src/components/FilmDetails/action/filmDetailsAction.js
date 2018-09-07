import * as filmDetailsActionType from '../constant/filmDetailsActionType';

export const onLoadFilmDetails = (id) => ({ type: filmDetailsActionType.FILMDETAILS_WILL_LOAD, payload: id})