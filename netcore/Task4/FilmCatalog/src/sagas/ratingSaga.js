import { call, put } from 'redux-saga/effects'
import * as actionType from '../components/Rating/action/ratingAction';
import * as ratingService from '../services/ratingService';

export function* ratingByUserLoadingAsync(action) {
    const rating = yield call(ratingService.getFilmRating, action.payload);
    yield put({ type: actionType.RATING_LOADED, payload: rating});
}

export function* addRatingLoadingAsync(action) {
    yield call(ratingService.addRating, action.payload);
    yield call(ratingByUserLoadingAsync, { ...action, payload: action.payload.filmId })
}