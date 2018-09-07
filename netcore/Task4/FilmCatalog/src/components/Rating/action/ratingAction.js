import * as ratingActionType from '../constant/ratingActionType';

export const onLoadRatingByUser = (filmId) => ({ type: ratingActionType.RATING_WILL_LOAD, payload: filmId})
export const onAddRatingByUser = (ratingData) => ({ type: ratingActionType.RATING_WILL_ADD, payload: ratingData})