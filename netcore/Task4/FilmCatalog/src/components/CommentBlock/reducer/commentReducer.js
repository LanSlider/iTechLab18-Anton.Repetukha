import { FILMCOMMENTS_LOADED } from '../action/commentAction';

   const initialState = { 
       isLoading: true,
       comments: {}
   };
  
   const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILMCOMMENTS_LOADED: {
          return {...state, isLoading: false, comments: action.payload};
      }

      default:
        return state;
    }
  }
  
  export default commentReducer;