import * as commentActionType from '../constant/commentActionType';

export const onLoadFilmComments = (filmId) => ({ type: commentActionType.FILMCOMMENTS_WILL_LOAD, payload: filmId })
export const addFilmComment = (commentData) => ({ type: commentActionType.FILMCOMMENT_WILL_ADD, payload: commentData })