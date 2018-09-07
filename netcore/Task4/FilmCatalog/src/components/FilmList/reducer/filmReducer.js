import * as filmListActionType from '../constant/filmActionType';

   const initialState = { 
       isLoading: true,
       films: []
   };
  
   const filmReducer = (state = initialState, action) => {
    switch (action.type) {
      case filmListActionType.FILMS_LOADED: {
          return {...state, isLoading: false, films: action.payload };
      }

      default:
        return state;
    }
  }
  
  export default filmReducer;