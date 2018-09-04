import { takeLatest } from 'redux-saga/effects'
import * as actionType from '../constants/actionTypes';
import * as userSaga from './userSaga';
import * as filmSaga from './filmSaga';
import * as commentSaga from './commentSaga'

function* rootSaga() {
    yield takeLatest(actionType.LOG_IN_PROGRESS, userSaga.logInAsync);
    yield takeLatest(actionType.LOG_OUT_PROGRESS, userSaga.logOutAsync);
    yield takeLatest(actionType.REG_IN_PROGRESS, userSaga.registerAsync);
    yield takeLatest(actionType.FILMS_WILL_LOAD, filmSaga.filmsLoadingAsync);
    yield takeLatest(actionType.FILMDETAILS_WILL_LOAD, filmSaga.filmDetailsLoadingAsync);
    yield takeLatest(actionType.FILMSFROMCATEGORY_WILL_LOAD, filmSaga.filmsFromCategoryLoadingAsync);
    yield takeLatest(actionType.FILMCOMMENTS_WILL_LOAD, commentSaga.commentLoadingAsync);
    yield takeLatest(actionType.FILMCOMMENT_WILL_ADD, commentSaga.addCommentLoadingAsync)
}

export default rootSaga;