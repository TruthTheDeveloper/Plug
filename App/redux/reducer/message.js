/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    conversation:[],
    allConversation:[],
    messageLoading:true,
};

const setConversation = (state, action) => {
     return updateObject(state,{
        conversation:action.conversation,
     });
};


const setAllConversation = (state, action) => {
  return updateObject(state,{
    allConversation:action.allConversation,
  });
};

const setMessageLoading = (state, action) => {
  return updateObject(state,{
    messageLoading:action.messageLoading,
  });
};

const addNewMessage = (state,action) => {
  return updateObject(state,{
    conversation:[...state.conversation, action.conversation],
  });
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_CONVERSATION:
          return setConversation(state,action);
      case actionTypes.SET_MESSAGE_LOADING:
        return setMessageLoading(state,action);
      case actionTypes.GET_ALL_CONVERSATION:
        return setAllConversation(state, action);
      case actionTypes.ADD_NEW_MESSAGE:
        return addNewMessage(state, action);
      default:
        return state;
    }
  };

export default reducer;
