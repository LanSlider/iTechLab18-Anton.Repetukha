import { FILMS_LOADED, FILMS_LOADING } from '../constants/actionTypes';

   const initialState = { 
       isLoading: true,
       films: []
   };
  
   const filmReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILMS_LOADED: {
          return {...state, isLoading: false, films: action.payload };
      }

      default:
        return state;
    }
  }
  
  export default filmReducer;