import { call, put } from 'redux-saga/effects'

import * as filmListType from '../components/FilmList/action/filmAction';
import * as filmDetailsType from '../components/FilmDetails/action/filmDetails';
import * as filmService from '../services/filmService';

export function* filmsLoadingAsync() {
    const films = yield call(filmService.getAllFilms);
    yield put({ type: filmListType.FILMS_LOADED, payload: films});
}

export function* filmDetailsLoadingAsync(action) {
    debugger;
    const filmData = yield call(filmService.getFilmsDetails, action.payload);
    debugger;
    yield put({ type: filmDetailsType.FILMDETAILS_LOADED, payload: filmData })
}

export function* filmsFromCategoryLoadingAsync(action) {
    const films = yield call(filmService.getFilmsFromCategory, action.payload);
    yield put({ type: filmListType.FILMS_LOADED, payload: films});
}