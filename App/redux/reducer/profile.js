/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
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
  availabilty: true,
};

const setFirstScreenDetail = (state, action) => {
  return updateObject(state, {
    description: action.data.description,
    availabilty: action.data.availabilty,
    sex: action.data.sex,
  });
};

const setSecondScreenDetail = (state, action) => {
  return updateObject(state, {
    institution: action.data.institution,
    department: action.data.department,
    level: action.data.level,
  });
};


const setProfilePic = (state, action) => {
  return updateObject(state, {
    profilePic: action.profilePic,
  });
};

const setAttributeOne = (state, action) => {
    return updateObject(state, {
        attributeOne: action.attributeOne,
    });
};

const setAttributeTwo = (state, action) => {
    return updateObject(state, {
        attributeTwo: action.attributeTwo,
    });
};

const setAttributeThree = (state, action) => {
    return updateObject(state, {
        attributeThree: action.attributeThree,
    });
};


const setAttributeFour = (state, action) => {
    return updateObject(state, {
        attributeFour: action.attributeFour,
    });
};


const setAttributeFive = (state, action) => {
    return updateObject(state, {
        attributeFive: action.attributeFive,
    });
};


const setAttributeSix = (state, action) => {
    return updateObject(state, {
        attributeSix: action.attributeSix,
    });
};


const setAttributeSeven = (state, action) => {
    return updateObject(state, {
        attributeSeven: action.attributeSeven,
    });
};

const setAttributeEight = (state, action) => {
    return updateObject(state, {
        attributeEight: action.attributeEight,
    });
};





const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIRST_SCREEN_DETAIL:
      return setFirstScreenDetail(state, action);
    case actionTypes.SET_SECOND_SCREEN_DETAIL:
      return setSecondScreenDetail(state, action);
    case actionTypes.SET_PROFILE_PIC:
      return setProfilePic(state, action);
    case actionTypes.SET_ATTRIBUTE_ONE:
        return setAttributeOne(state, action);
    case actionTypes.SET_ATTRIBUTE_TWO:
        return setAttributeTwo(state, action);
    case actionTypes.SET_ATTRIBUTE_THREE:
        return setAttributeThree(state, action);
    case actionTypes.SET_ATTRIBUTE_FOUR:
        return setAttributeFour(state, action);
    case actionTypes.SET_ATTRIBUTE_FIVE:
        return setAttributeFive(state, action);
    case actionTypes.SET_ATTRIBUTE_SIX:
        return setAttributeSix(state,action);
    case actionTypes.SET_ATTRIBUTE_SEVEN:
        return setAttributeSeven(state, action);
    case actionTypes.SET_ATTRIBUTE_EIGHT:
        return setAttributeEight(state,action);
    default:
        return state;
  }
};

export default reducer;
