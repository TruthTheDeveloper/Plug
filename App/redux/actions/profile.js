/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as actionTypes from './actionTypes';
// ,{
//   headers: {
//       'Authorization': 'Bearer ' + data.token,
//       redirect: 'follow',
//   },
// }
export const postProfile = (data) => {
    return dispatch => {
      console.log(data);
      const formdata = new FormData();
      formdata.append('profilePic', {uri:data.profilePic, name: 'image.jpg', type: 'image/jpg'});

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
        availability:data.availability,
      };
      axios
        .post('https://findplug.herokuapp.com/profile',formdata, post)
        .then(response => {
          console.log(response, 'the response');
        })
        .catch((err) => console.log(err, 'its  err err err err'));
    };
  };



export const getFirstDetailsToState = (data) => {
  return {
    type: actionTypes.SET_FIRST_SCREEN_DETAIL,
    description:data.description,
    availabilty:data.available,
    sex:data.gender,
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
    type:actionTypes.SET_PROFILE_PIC,
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
    attributeTwo:attribute || '',
  };
};


export const getattributeThree = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_THREE,
    attributeThree:attribute || '',
  };
};

export const getattributeFour = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_FOUR,
    attributeFour:attribute || '',
  };
};

export const getattributeFive = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_FIVE,
    attributeFive:attribute || '',
  };
};

export const getattributeSix = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SIX,
    attributeSix:attribute || '',
  };
};

export const getattributeSeven = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_SEVEN,
    attributeSeven:attribute || '',
  };
};

export const getattributeEight = (attribute) => {
  return {
    type:actionTypes.SET_ATTRIBUTE_EIGHT,
    attributeEight:attribute || '',
  };
};
