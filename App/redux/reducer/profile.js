/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  userId: null,
  sex: null,
  department: null,
  level: null,
  institution: null,
  description: null,
  attributeOne: '',
  attributeTwo: '',
  attributeFour: '',
  attributeFive: '',
  attributeSix: '',
  attributeSeven: '',
  attributeEight: '',
  availability: true,
};

const setFirstScreenDetail = (state, action) => {
  return updateObject(state, {
    description: action.description,
    availilabilty: action.availability,
    sex: action.sex,
  });
};

const setSecondScreenDetail = (state, action) => {
  return updateObject(state, {
    institution: action.institution,
    department: action.department,
    level: action.level,
  });
};

const setThirdScreenDetail = (state, action) => {
  return updateObject(state, {
    attributeOne: action.attributeOne,
    attributeTwo: action.attributeTwo,
    attributeThree: action.attributeThree,
    attributeFour: action.attributeFour,
    attributeFive: action.attributeFive,
    attributeSix: action.attributeSix,
    attributeSeven: action.attributeSeven,
    attributeEight: action.attributeEight,
    profilePic: action.profilePic,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIRST_SCREEN_DETAIL:
      return setFirstScreenDetail(state, action);
    case actionTypes.SET_SECOND_SCREEN_DETAIL:
      return actionTypes.setSecondScreenDetail(state, action);
    case actionTypes.SET_THIRD_SCREEN_DETAIL:
      return actionTypes.setThirdScreenDetail(state, action);
    default:
        return state;
  }
};

export default reducer;
