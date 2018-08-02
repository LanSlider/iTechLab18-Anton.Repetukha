import {
    ADD_EMAIL,
    ADD_PASSWORD
  } from '../constants/ActionTypes'
  
  const initialState = [
    {
      email: "",
      password: ""
    }
  ]
  
   const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_EMAIL:
        return {...state, email: action.email};
    
      case ADD_PASSWORD:
        return {...state, password: action.password};
  
      default:
        return state;
    }
  }
  
  export default rootReducer;