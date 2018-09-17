import * as registerActionType from '../constant/registerActionType';

export const registerUser = (userData) => ({ type: registerActionType.REG_IN_PROGRESS, payload: userData })