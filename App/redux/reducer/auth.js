/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  token: null,
  username: null,
  error: null,
  loading: false,
  userId:null,
  authLoading:false,
};

const resetAuthLoading = (state, action) => {
  return updateObject(state, {
    authloading:action.authLoading,
  });
};

const authStart = (state, action) => {
  return updateObject(state, {error: null, loading: true});
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    username: action.username,
    error: null,
    loading: false,
  });
};

const setAuthLoading = (state, action) => {
  return updateObject(state,{
    authLoading:action.authLoading,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {token: null, username: null});
};

const setUserId = (state, action) => {
  return updateObject(state, {userId: action.userId});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.GET_USER_ID:
      return setUserId(state, action);
    case actionTypes.SET_AUTH_LOADING:
      return setAuthLoading(state, action);
    case actionTypes.RESET_AUTH_LOADING:
      return resetAuthLoading(state,action);
    default:
      return state;
  }
};

export default reducer;
