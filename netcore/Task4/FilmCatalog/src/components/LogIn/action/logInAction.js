import * as logInActionType from '../constant/logInActionType';

export const willLogInUser = () => ({ type: logInActionType.LOG_WILL_IN_PROGRESS})
export const logInUser = (userData) => ({ type: logInActionType.LOG_IN_PROGRESS, payload: userData })