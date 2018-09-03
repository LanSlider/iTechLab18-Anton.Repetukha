import { USER_AUTHORIZED, USER_UNAUTHORIZED, LOG_WILL_IN_PROGRESS } from '../constants/actionTypes';
import { getInfoFromToken } from '../services/authService'

   const initialState = getInfoFromToken();
  
   const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOG_WILL_IN_PROGRESS: {
          return {...state, isLoading: true }    
      }
      case USER_AUTHORIZED: {
          return {...state, isAuth: true, name: action.userData.name, isLoading: false };
      }

      case USER_UNAUTHORIZED: {
          const currentState = getInfoFromToken();
          return {...state, ...currentState};
      }

      default:
        return state;
    }
  }
  
  export default userReducer;