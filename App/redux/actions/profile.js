/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const postProfile = () => {

  // if (data !== null){
  //   let post = {
  //     userId: data.userId,
  //     sex:data.sex,
  //     department:data.department,
  //     level:data.level,
  //     institution:data.institution,
  //     description:data.description,
  //     attributeOne:data.attributeOne,
  //     attributeTwo:data.attributeTwo,
  //     attributeThree:data.attributeThree,
  //     attributeFour:data.attributeFour,
  //     atttibuteFive:data.attributeFive,
  //     attributteSix:data.attributeSix,
  //     attributeSeven:data.attributeSeven,
  //     attributeEight:data.attributeEight,
  //     profilePic:data.profilePic,
  //   };

    return dispatch => {
      axios
        .post('https://findplug.herokuapp.com/profile')
        .then(response => {
          console.log(response);
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

export const getProfilePic = (data) => {
  return {
    type:actionTypes.SET_THIRD_SCREEN_DETAIL,
    profilePic:data.profilePic,
  };
};

export const getattributeOne = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_ONE,
    attributeOne:data.attributeOne || '',
  };
};

export const getattributeTwo = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_TWO,
    attributeOne:data.attributeTwo || '',
  };
};


export const getattributeThree = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_THREE,
    attributeOne:data.attributeThree || '',
  };
};

export const getattributeFour = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_FOUR,
    attributeOne:data.attributeFour || '',
  };
};

export const getattributeFive = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_FOUR,
    attributeOne:data.attributeFour || '',
  };
};

export const getattributeSix = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SIX,
    attributeOne:data.attributeSix || '',
  };
};

export const getattributeSeven = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SEVEN,
    attributeOne:data.attributeSix || '',
  };
};

export const getattributeEight = (data) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SEVEN,
    attributeOne:data.attributeSix || '',
  };
};
