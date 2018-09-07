import * as ratingActionType from '../constant/ratingActionType';

   const initialState = { 
       isLoading: true,
       mark: null,
       filmId: null
   };
  
   const ratingReducer = (state = initialState, action) => {
       debugger;
    switch (action.type) {
      case ratingActionType.RATING_LOADED: {
          return {...state, isLoading: false, mark: action.payload.mark, filmId: action.payload.filmId};
      }

      default:
        return state;
    }
  }
  
  export default ratingReducer;