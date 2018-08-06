import * as types from '../constants/ActionTypes'

// export const addEmail = email => ({ type: types.ADD_EMAIL, email })
// export const addPassword = password => ({ type: types.ADD_PASSWORD, password })

export const changeEmail = email => ({ type: types.EMAIL_CHANGE, email })
export const changePassword = password => ({ type: types.PASSWORD_CHANGE, password })
export const validateEmail = email => ({ type: types.EMAIL_VALIDATE, email })
export const validatePassword = password => ({ type: types.PASSWORD_VALIDATE, password })
export const submitData = () => ({ type: types.DATA_SUBMIT })
export const resetData = () => ({ type: types.DATA_RESET })