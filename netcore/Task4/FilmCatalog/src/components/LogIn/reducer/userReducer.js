import * as logInActionType from '../constant/logInActionType';
import { getInfoFromToken } from '../../../services/authService'

   const initialState = getInfoFromToken();
  
   const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case logInActionType.LOG_WILL_IN_PROGRESS: {
          return {...state, isLoading: true }    
      }
      case logInActionType.USER_AUTHORIZED: {
          return {...state, isAuth: true, name: action.payload.name, userId: action.payload.id, isLoading: false };
      }

      case logInActionType.USER_UNAUTHORIZED: {
          const currentState = getInfoFromToken();
          return {...state, ...currentState};
      }

      default:
        return state;
    }
  }
  
  export default userReducer;