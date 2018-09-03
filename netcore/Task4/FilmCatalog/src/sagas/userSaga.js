import { call, put } from 'redux-saga/effects'
import * as actionType from '../constants/actionTypes';
import * as authService from '../services/authService';

export function* logInAsync(action) {
    const userData = yield call(authService.logInUser, action.userData);
    yield put({ type: actionType.USER_AUTHORIZED, userData});
}

export function* logOutAsync() {
    yield call(authService.logOutUser);
    yield put({ type: actionType.USER_UNAUTHORIZED});
}

export function* registerAsync(action) {
    yield call(authService.registerUser, action.userData);
}