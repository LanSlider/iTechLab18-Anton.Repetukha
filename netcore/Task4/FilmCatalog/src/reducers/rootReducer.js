import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import filmReducer from './filmReducer';
import filmDetailsReducer from './filmDetailsReducer';
import commentReducer from '../components/CommentBlock/reducer/commentReducer'
import ratingReducer from '../components/Rating/reducer/ratingReducer';

const rootReducer = combineReducers({
     film: filmReducer,
     user: userReducer,
     form: formReducer,
     rating: ratingReducer,
     filmDetails: filmDetailsReducer,
     comment: commentReducer
})

export default rootReducer;