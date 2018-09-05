import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionType from '../components/CommentBlock/action/commentAction';
import * as commentService from '../services/commentService';

export function* commentLoadingAsync(action) {
    const comments = yield call(commentService.getAllComments, action.payload);
    yield put({ type: actionType.FILMCOMMENTS_LOADED, payload: comments});
}

export function* addCommentLoadingAsync(action) {
    yield call(commentService.addComment, action.payload);
    yield call(commentLoadingAsync, { ...action, payload: action.payload.filmId })
}