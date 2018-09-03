import { FILMDETAILS_LOADED } from '../constants/actionTypes';

   const initialState = { 
       isLoading: true,
       data: {}
   };
  
   const filmDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILMDETAILS_LOADED: {
          return {...state, isLoading: false, data: action.filmData};
      }

      default:
        return state;
    }
  }
  
  export default filmDetailsReducer;