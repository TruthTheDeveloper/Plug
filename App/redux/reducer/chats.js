/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isRead:false,
  isOnline:false,
  receiverId:null,
  user: null,
  DefaultRoute: 'HOME',
  index: null,
  details: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_CHAT:
      return {...state, user: action.value};
    case actionTypes.SET_DEFAULT_ROUTE:
      return {...state, DefaultRoute: action.value};
    case actionTypes.SHOW_DETAILS:
      return {...state, details: action.value};
    case actionTypes.ISREAD:
      return {...state, isRead:action.isRead};
    case actionTypes.RECEIVERID:
      return {...state, receiverId:action.receiverId};
    case actionTypes.ISONLINE:
      return {...state, isOnline:action.isOnline};
    default:
      return state;
  }
};

export default reducer;
