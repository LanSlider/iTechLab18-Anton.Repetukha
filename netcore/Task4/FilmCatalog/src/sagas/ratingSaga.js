import { call, put } from 'redux-saga/effects';

import * as actionType from '../components/Rating/constant/ratingActionType';
import * as ratingService from '../services/ratingService';
import * as filmSage from '../sagas/filmSaga';

export function* ratingByUserLoadingAsync(action) {
    const rating = yield call(ratingService.getFilmRating, action.payload);
    yield put({ type: actionType.RATING_LOADED, payload: rating});
}

export function* addRatingLoadingAsync(action) {
    yield call(ratingService.addRating, action.payload);
    yield call(ratingByUserLoadingAsync, { ...action, payload: action.payload.filmId })
    yield call(filmSage.filmDetailsLoadingAsync, { payload: action.payload.filmId })
}