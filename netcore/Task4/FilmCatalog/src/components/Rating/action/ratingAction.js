export const RATING_WILL_ADD = "RATING_WILL_ADD"
export const RATING_ADDED = "RATING_ADDED"

export const RATING_WILL_LOAD = "RATING_WILL_LOAD"
export const RATING_LOADED = "RATING_LOADED"

export const onLoadRatingByUser = (filmId) => ({ type: RATING_WILL_LOAD, payload: filmId})
export const onAddRatingByUser = (ratingData) => ({ type: RATING_WILL_ADD, payload: ratingData})