import { RATING_LOADED } from '../action/ratingAction';

   const initialState = { 
       isLoading: true,
       raiting: {}
   };
  
   const ratingReducer = (state = initialState, action) => {
    switch (action.type) {
      case RATING_LOADED: {
          return {...state, isLoading: false, raiting: action.payload};
      }

      default:
        return state;
    }
  }
  
  export default ratingReducer;