/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const postProfile = (data) => {

    let post = {
      userId: data.id,
      sex:data.sex,
      department:data.department,
      level:data.level,
      institution:data.institution,
      description:data.description,
      attributeOne:data.attributeOne,
      attributeTwo:data.attributeTwo,
      attributeThree:data.attributeThree,
      attributeFour:data.attributeFour,
      atttibuteFive:data.attributeFive,
      attributteSix:data.attributeSix,
      attributeSeven:data.attributeSeven,
      attributeEight:data.attributeEight,
      profilePic:data.profilePic,
    };

    return dispatch => {
      axios
        .post('https://findplug.herokuapp.com/profile', post)
        .then(response => {
          console.log(response, 'the response');
        })
        .then((err) => console.log(err));
    };
  };



export const getFirstDetailsToState = (data) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    description:data.description,
    availabilty:data.availability,
    sex:data.sex,
  };
};


export const getSecondDetailsToState = (data) => {
  return {
    type:actionTypes.SET_SECOND_SCREEN_DETAIL,
    institution:data.institution,
    department:data.department,
    level:data.level,
  };
};

export const getProfilePic = (pic) => {
  return {
    type:actionTypes.SET_THIRD_SCREEN_DETAIL,
    profilePic:pic,
  };
};

export const getattributeOne = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_ONE,
    attributeOne:attribute || '',
  };
};

export const getattributeTwo = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_TWO,
    attributeOne:attribute || '',
  };
};


export const getattributeThree = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_THREE,
    attributeOne:attribute || '',
  };
};

export const getattributeFour = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_FOUR,
    attributeOne:attribute || '',
  };
};

export const getattributeFive = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_FOUR,
    attributeOne:attribute || '',
  };
};

export const getattributeSix = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SIX,
    attributeOne:attribute || '',
  };
};

export const getattributeSeven = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SEVEN,
    attributeOne:attribute || '',
  };
};

export const getattributeEight = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SEVEN,
    attributeOne:attribute || '',
  };
};
