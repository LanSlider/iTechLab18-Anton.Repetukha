import { takeLatest } from 'redux-saga/effects'
import * as actionType from '../constants/actionTypes';
import * as commentAction from '../components/CommentBlock/action/commentAction';
import * as ratingAction from '../components/Rating/action/ratingAction';
import * as userSaga from './userSaga';
import * as filmSaga from './filmSaga';
import * as commentSaga from './commentSaga';
import * as ratingSaga from './ratingSaga';

function* rootSaga() {
    yield takeLatest(actionType.LOG_IN_PROGRESS, userSaga.logInAsync);
    yield takeLatest(actionType.LOG_OUT_PROGRESS, userSaga.logOutAsync);
    yield takeLatest(actionType.REG_IN_PROGRESS, userSaga.registerAsync);
    yield takeLatest(actionType.FILMS_WILL_LOAD, filmSaga.filmsLoadingAsync);
    yield takeLatest(actionType.FILMDETAILS_WILL_LOAD, filmSaga.filmDetailsLoadingAsync);
    yield takeLatest(actionType.FILMSFROMCATEGORY_WILL_LOAD, filmSaga.filmsFromCategoryLoadingAsync);
    yield takeLatest(commentAction.FILMCOMMENTS_WILL_LOAD, commentSaga.commentLoadingAsync);
    yield takeLatest(commentAction.FILMCOMMENT_WILL_ADD, commentSaga.addCommentLoadingAsync);
    yield takeLatest(ratingAction.RATING_WILL_LOAD, ratingSaga.ratingByUserLoadingAsync);
    yield takeLatest(ratingAction.RATING_WILL_ADD, ratingSaga.addRatingLoadingAsync);
}

export default rootSaga;