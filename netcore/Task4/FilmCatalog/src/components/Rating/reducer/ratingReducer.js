import { RATING_LOADED } from '../action/ratingAction';

   const initialState = { 
       isLoading: true,
       mark: null,
       filmId: null
   };
  
   const ratingReducer = (state = initialState, action) => {
       debugger;
    switch (action.type) {
      case RATING_LOADED: {
          return {...state, isLoading: false, mark: action.payload.mark, filmId: action.payload.filmId};
      }

      default:
        return state;
    }
  }
  
  export default ratingReducer;