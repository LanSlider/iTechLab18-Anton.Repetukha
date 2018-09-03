import { call, put } from 'redux-saga/effects'
import * as actionType from '../constants/actionTypes';
import * as filmService from '../services/filmService';

export function* filmsLoadingAsync() {
    const films = yield call(filmService.getAllFilms);
    yield put({ type: actionType.FILMS_LOADED, films});
}

export function* filmDetailsLoadingAsync(action) {
    const filmData = yield call(filmService.getFilmsDetails, action.id);
    yield put({ type: actionType.FILMDETAILS_LOADED, filmData })
}

export function* filmsFromCategoryLoadingAsync(action) {
    const films = yield call(filmService.getFilmsFromCategory, action.category);
    yield put({ type: actionType.FILMS_LOADED, films});
}