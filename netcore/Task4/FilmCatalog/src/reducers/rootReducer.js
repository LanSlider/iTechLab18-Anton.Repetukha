import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from '../components/LogIn/reducer/userReducer';
import filmReducer from '../components/FilmList/reducer/filmReducer';
import filmDetailsReducer from '../components/FilmDetails/reducer/filmDetailsReducer';
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