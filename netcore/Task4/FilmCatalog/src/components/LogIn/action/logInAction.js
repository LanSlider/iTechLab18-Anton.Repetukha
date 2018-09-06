export const LOG_WILL_IN_PROGRESS = "LOG_WILL_IN_PROGRESS"
export const LOG_IN_PROGRESS = 'LOG_IN_PROGRESS'
// export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'  
// export const LOG_IN_FAILED = 'LOG_IN_FALED'
export const USER_AUTHORIZE = "USER_AUTHORIZE"
export const USER_AUTHORIZED = "USER_AUTHORIZED"
export const USER_UNAUTHORIZED = "USER_UNAUTHORIZED"

export const willLogInUser = () => ({ type: LOG_WILL_IN_PROGRESS})
export const logInUser = (userData) => ({ type: LOG_IN_PROGRESS, payload: userData })