import * as types from '../constants/ActionTypes'

export const addEmail = email => ({ type: types.ADD_EMAIL, email: email })
export const addPassword = password => ({ type: types.ADD_PASSWORD, password: password })