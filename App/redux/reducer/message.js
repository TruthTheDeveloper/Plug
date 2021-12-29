/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    consversation:[],
};

const setConversation = (state, action) => {
     return updateObject(state,{
        conversation:action.conversation,
     });
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_CONVERSATION:
          return setConversation(state,action);
      default:
        return state;
    }
  };

export default reducer;
