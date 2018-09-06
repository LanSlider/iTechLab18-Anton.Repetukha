import { call, put } from 'redux-saga/effects'

import * as logInType from '../components/LogIn/action/logInAction';
import * as authService from '../services/authService';

export function* logInAsync(action) {
    const userData = yield call(authService.logInUser, action.payload);
    yield put({ type: logInType.USER_AUTHORIZED, payload: userData});
}

export function* logOutAsync() {
    yield call(authService.logOutUser);
    yield put({ type: logInType.USER_UNAUTHORIZED});
}

export function* registerAsync(action) {
    yield call(authService.registerUser, action.payload);
}