export const REG_IN_PROGRESS = 'REG_IN_PROGRESS'
// export const REG_SUCCESS = 'REG_SUCCESS'
// export const REG_FAILED = 'REG_FAILED'

export const registerUser = (userData) => ({ type: REG_IN_PROGRESS, payload: userData })