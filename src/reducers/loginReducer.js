import {EMAIL_CHANGE,PASSWORD_CHANGE,EMAIL_VALIDATE,PASSWORD_VALIDATE, DATA_SUBMIT, DATA_RESET} from '../constants/ActionTypes';
import { validateEmail, validatePassword } from '../constants/ValidateForm';
  
  const initialState = {
      email: "",
      password: "",
      isEmailValid: "default",
      isPasswordValid: "default",
      isDataSubmit: false,
      errorEmailMessage: "",
      errorPassMessage: "",
  }
  
  
   const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case EMAIL_CHANGE: {
        return {...state, email: action.email};
      }

      case PASSWORD_CHANGE: {
        return {...state, password: action.password};
      }

      case EMAIL_VALIDATE: {
        state.errorEmailMessage = validateEmail(action.email);
        if(state.errorEmailMessage === '') {
          return {...state, isEmailValid: true}
        }
        return {...state, isEmailValid: false, errorEmailMessage: state.errorEmailMessage}
      }

      case PASSWORD_VALIDATE: {
        state.errorPassMessage = validatePassword(action.password);
        if(state.errorPassMessage === '') {
          return {...state, isPasswordValid: true}
        }
        return {...state, isPasswordValid: false, errorPassMessage: state.errorPassMessage}
      }

      case DATA_SUBMIT: {
          return {...state, isDataSubmit: !state.isDataSubmit }
      }

      case DATA_RESET: {
        return {...state, ...initialState};
      }

      default:
        return state;
    }
  }
  
  export default loginReducer;