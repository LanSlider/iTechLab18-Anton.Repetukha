export const FILMCOMMENTS_WILL_LOAD = "FILMCOMMENT_WILL_LOAD"
export const FILMCOMMENTS_LOADED = "FILMCOMMENT_LOADED"

export const FILMCOMMENT_WILL_ADD = "FILMCOMMENT_WILL_ADD"
export const FILMCOMMENT_ADDED = "FILMCOMMENT_ADDED"

export const onLoadFilmComments = (filmId) => ({ type: FILMCOMMENTS_WILL_LOAD, payload: filmId })
export const addFilmComment = (commentData) => ({ type: FILMCOMMENT_WILL_ADD, payload: commentData })