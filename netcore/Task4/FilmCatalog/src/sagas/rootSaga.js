import { takeLatest } from 'redux-saga/effects'

import * as filmListAction from '../components/FilmList/action/filmAction';
import * as filmDetailsAction from '../components/FilmDetails/action/filmDetails';
import * as logInAction from '../components/LogIn/action/logInAction';
import * as filmCategoryAction from '../components/FilmCategory/action/filmCategoryAction';
import * as logOutAction from '../components/LogOut/action/logOutAction';
import * as registerAction from '../components/Register/action/registerAction'
import * as commentAction from '../components/CommentBlock/action/commentAction';
import * as ratingAction from '../components/Rating/action/ratingAction';

import * as userSaga from './userSaga';
import * as filmSaga from './filmSaga';
import * as commentSaga from './commentSaga';
import * as ratingSaga from './ratingSaga';

function* rootSaga() {
    yield takeLatest(logInAction.LOG_IN_PROGRESS, userSaga.logInAsync);
    yield takeLatest(logOutAction.LOG_OUT_PROGRESS, userSaga.logOutAsync);
    yield takeLatest(registerAction.REG_IN_PROGRESS, userSaga.registerAsync);
    yield takeLatest(filmListAction.FILMS_WILL_LOAD, filmSaga.filmsLoadingAsync);
    yield takeLatest(filmDetailsAction.FILMDETAILS_WILL_LOAD, filmSaga.filmDetailsLoadingAsync);
    yield takeLatest(filmCategoryAction.FILMSFROMCATEGORY_WILL_LOAD, filmSaga.filmsFromCategoryLoadingAsync);
    yield takeLatest(commentAction.FILMCOMMENTS_WILL_LOAD, commentSaga.commentLoadingAsync);
    yield takeLatest(commentAction.FILMCOMMENT_WILL_ADD, commentSaga.addCommentLoadingAsync);
    yield takeLatest(ratingAction.RATING_WILL_LOAD, ratingSaga.ratingByUserLoadingAsync);
    yield takeLatest(ratingAction.RATING_WILL_ADD, ratingSaga.addRatingLoadingAsync);
}

export default rootSaga;