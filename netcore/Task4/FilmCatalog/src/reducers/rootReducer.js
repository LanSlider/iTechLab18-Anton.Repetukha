import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import filmReducer from './filmReducer';
import filmDetailsReducer from './filmDetailsReducer';

const rootReducer = combineReducers({
     film: filmReducer,
     user: userReducer,
     form: formReducer,
     filmDetails: filmDetailsReducer
})

export default rootReducer;