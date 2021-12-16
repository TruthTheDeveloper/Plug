/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as actionTypes from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postSucess = (data) => {
  return {
    type:actionTypes.POST_SUCCESS,
    success:data,
  };
};

export const postProfile = (data) => {
  console.log(data.token);
    return dispatch => {
      const formdata = new FormData();
      formdata.append('profilePic', {uri:data.profilePic, name: 'image.jpg', type: 'image/jpg'});
      formdata.append('userId', data.userId);
      formdata.append('sex', data.sex);
      formdata.append('level', data.level);
      formdata.append('department',data.department);
      formdata.append('institution', data.institution);
      formdata.append('description',data.description);
      formdata.append('attributeOne',data.attributeOne);
      formdata.append('attributeTwo',data.attributeTwo);
      formdata.append('attributeThree',data.attributeThree);
      formdata.append('attributeFour', data.attributeFour);
      formdata.append('attributeFive', data.attributeFive);
      formdata.append('attributeSix', data.attributeSix);
      formdata.append('attributeSeven', data.attributeSeven);
      formdata.append('attributeEight', data.attributeEight);
      formdata.append('availabilty', data.availabilty);
      console.log(formdata);
      axios
        .post('https://findplug.herokuapp.com/profile',formdata,{headers:{
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data; charset=utf-8',
          'Authorization': data.token,
          }},)
        .then(response => {
          console.log(response.data, 'the response');
          AsyncStorage.setItem('success', true);
          dispatch(postSucess(true));
        })
        .catch((err) => console.log(err, 'its  err err err err'));
    };
  };



// export const getFirstDetailsToState = (data) => {
//   return {
//     type: actionTypes.SET_FIRST_SCREEN_DETAIL,
//     description:data.description,
//     availabilty:data.available,
//     sex:data.gender,
//   };
// };


// export const getSecondDetailsToState = (data) => {
//   return {
//     type:actionTypes.SET_SECOND_SCREEN_DETAIL,
//     institution:data.institution,
//     department:data.department,
//     level:data.level,
//   };
// };

export const getProfilePic = (pic) => {
  return {
    type:actionTypes.SET_PROFILE_PIC,
    profilePic:pic,
  };
};

// export const getattributeOne = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_ONE,
//     attributeOne:attribute || '',
//   };
// };

// export const getattributeTwo = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_TWO,
//     attributeTwo:attribute || '',
//   };
// };


// export const getattributeThree = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_THREE,
//     attributeThree:attribute || '',
//   };
// };

// export const getattributeFour = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_FOUR,
//     attributeFour:attribute || '',
//   };
// };

// export const getattributeFive = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_FIVE,
//     attributeFive:attribute || '',
//   };
// };

// export const getattributeSix = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_SIX,
//     attributeSix:attribute || '',
//   };
// };

// export const getattributeSeven = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_SEVEN,
//     attributeSeven:attribute || '',
//   };
// };

// export const getattributeEight = (attribute) => {
//   return {
//     type:actionTypes.SET_ATTRIBUTE_EIGHT,
//     attributeEight:attribute || '',
//   };
// };
