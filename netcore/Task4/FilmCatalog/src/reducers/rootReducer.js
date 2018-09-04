import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import filmReducer from './filmReducer';
import filmDetailsReducer from './filmDetailsReducer';
import commentReducer from '../components/CommentBlock/reducer/commentReducer'

const rootReducer = combineReducers({
     film: filmReducer,
     user: userReducer,
     form: formReducer,
     filmDetails: filmDetailsReducer,
     comment: commentReducer
})

export default rootReducer;