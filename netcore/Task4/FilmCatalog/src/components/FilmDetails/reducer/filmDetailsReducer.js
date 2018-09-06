import { FILMDETAILS_LOADED } from '../action/filmDetails';

   const initialState = { 
       isLoading: true,
       data: {}
   };
  
   const filmDetailsReducer = (state = initialState, action) => {
       debugger;
    switch (action.type) {
      case FILMDETAILS_LOADED: {
          return {...state, isLoading: false, data: action.payload};
      }

      default:
        return state;
    }
  }
  
  export default filmDetailsReducer;