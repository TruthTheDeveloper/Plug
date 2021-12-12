import * as actionTypes from '../actions/actionTypes';

const initialState = {
    screen: 1
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SCREEN1: 
            return {screen: 1};
        case actionTypes.SCREEN2:
            return {screen: 2};
        case actionTypes.SCREEN3:
            return {screen: 3};
    }
    return state;
}

export default reducer;