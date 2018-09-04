import * as types from '../constants/actionTypes'

export const willLogInUser = () => ({ type: types.LOG_WILL_IN_PROGRESS})
export const logInUser = (userData) => ({ type: types.LOG_IN_PROGRESS, payload: userData })
export const logOutUser = () => ({ type: types.LOG_OUT_PROGRESS })
export const registerUser = (userData) => ({ type: types.REG_IN_PROGRESS, payload: userData })

export const onLoadFilms = () => ({ type: types.FILMS_WILL_LOAD })
export const onLoadFilmsCategory = (category) => ({ type: types.FILMSFROMCATEGORY_WILL_LOAD, payload: category })
export const onLoadFilmDetails = (id) => ({ type: types.FILMDETAILS_WILL_LOAD, payload: id})

export const onLoadFilmComments = (filmId) => ({ type: types.FILMCOMMENTS_WILL_LOAD, payload: filmId })
export const addFilmComment = (commentData) => ({ type: types.FILMCOMMENT_WILL_ADD, payload: commentData })