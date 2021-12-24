import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    index: null,
    searchIndex: null,
    showCard: false,
    searchShowCard: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOADING:
            return {...state, loading: action.value };
        case actionTypes.INDEX:
            return {...state, index: action.value};
        case actionTypes.SHOW_CARDS:
            return {...state, showCard: action.value};
        case actionTypes.SEARCH_INDEX: 
            return {...state, searchIndex: action.value};
        case actionTypes.SHOW_SEARCHCARDS:
            return {...state, searchShowCard: action.value};
        default: return state
    }
}; 

export default reducer;