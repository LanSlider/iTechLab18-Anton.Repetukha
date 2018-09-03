import { takeLatest } from 'redux-saga/effects'
import * as actionType from '../constants/actionTypes';
import * as userSaga from './userSaga';
import * as filmSaga from './filmSaga';

function* rootSaga() {
    yield takeLatest(actionType.LOG_IN_PROGRESS, userSaga.logInAsync);
    yield takeLatest(actionType.LOG_OUT_PROGRESS, userSaga.logOutAsync);
    yield takeLatest(actionType.REG_IN_PROGRESS, userSaga.registerAsync);
    yield takeLatest(actionType.FILMS_WILL_LOAD, filmSaga.filmsLoadingAsync);
    yield takeLatest(actionType.FILMDETAILS_WILL_LOAD, filmSaga.filmDetailsLoadingAsync);
    yield takeLatest(actionType.FILMSFROMCATEGORY_WILL_LOAD, filmSaga.filmsFromCategoryLoadingAsync);
}

export default rootSaga;