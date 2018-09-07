import * as commentActionType from '../constant/commentActionType';

   const initialState = { 
       isLoading: true,
       comments: {}
   };
  
   const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case commentActionType.FILMCOMMENTS_LOADED: {
          return {...state, isLoading: false, comments: action.payload};
      }

      default:
        return state;
    }
  }
  
  export default commentReducer;