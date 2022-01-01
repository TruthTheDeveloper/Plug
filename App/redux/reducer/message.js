/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    conversation:[],
    messageLoading:true
};

const setConversation = (state, action) => {
     return updateObject(state,{
        conversation:action.conversation,
     });
};

const setMessageLoading = (state, action) => {
  return updateObject(state,{
    messageLoading:action.messageLoading
  })
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_CONVERSATION:
          return setConversation(state,action);
      case actionTypes.SET_MESSAGE_LOADING:
        return setMessageLoading(state,action)
      default:
        return state;
    }
  };

export default reducer;
