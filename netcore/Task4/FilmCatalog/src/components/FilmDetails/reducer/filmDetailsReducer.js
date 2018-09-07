import * as filmDetailsActionType from '../constant/filmDetailsActionType';

   const initialState = { 
       isLoading: true,
       data: {}
   };
  
   const filmDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case filmDetailsActionType.FILMDETAILS_LOADED: {
          return {...state, isLoading: false, data: action.payload};
      }

      default:
        return state;
    }
  }
  
  export default filmDetailsReducer;