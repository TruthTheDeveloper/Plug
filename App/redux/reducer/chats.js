import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
    switch(action.types){
        case actionTypes.OPEN_CHAT: 
            return {...state, user: 'Hello'};
        default: return state
    }
};

export default reducer;