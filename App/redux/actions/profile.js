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
          AsyncStorage.setItem('success', JSON.stringify(true));
          dispatch(postSucess(true));
        })
        .catch((err) => console.log(err, 'its  err err err err'));
    };
  };


export const getProfilePic = (pic) => {
  return {
    type:actionTypes.SET_PROFILE_PIC,
    profilePic:pic,
  };
};
