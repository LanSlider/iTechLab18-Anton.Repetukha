import { call, put } from 'redux-saga/effects'
import * as actionType from '../constants/actionTypes';
import * as commentService from '../services/commentService';

export function* commentLoadingAsync(action) {
    const comments = yield call(commentService.getAllComments, action.payload);
    yield put({ type: actionType.FILMCOMMENTS_LOADED, payload: comments});
}

export function* addCommentLoadingAsync(action) {
    yield call(commentService.addComment, action.payload);
    // yield put({ type: actionType.FILMCOMMENTS_LOADED, payload: paylfilmData })
}