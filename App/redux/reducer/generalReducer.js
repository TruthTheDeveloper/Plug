import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOADING:
            return {...state, loading: action.value };
        default: return state
    }
}

export default reducer;