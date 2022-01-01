/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as actionTypes from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postSucess = (data) => {
  return {
    type:actionTypes.POST_SUCCESS,
    profileId:data,
  };
};

export const searchedData = (data) => {
  return {
    type:actionTypes.GET_SEARCH_DATA,
    searchedData:data,
  };
};

export const setSearchLoading = (data) => {
  return {
    type:actionTypes.SET_SEARCH_LOADING,
    searchLoading:data,
  };
};

export const setPostProfileLoading = (data) => {
  return {
    type:actionTypes.SET_POST_PROFILE_LOADING,
    postProfileLoading:data,
  };
};

export const setUpdateProfileLoading = (data) => {
  return {
    type:actionTypes.SET_UPDATE_PROFILE_LOADING,
    updateProfileLoading:data,
  };
};

export const setRetreiveProfileLoading = (data) => {
  return {
    type:actionTypes.SET_RETRIEVE_PROFILE_LOADING,
    retreiveProfileLoading:data,
  };
};

export const setAllProfileLoading = (data) => {
  return {
    type:actionTypes.SET_ALL_PROFILE_LOADING,
    allProfileLoading:data,
  };

};



export const searchAllProfile = (query, pageNum) => {
  console.log(query);
  return dispatch => {
    axios.get(`https://findplug.herokuapp.com/profile?query=${query}&page=${pageNum}`)
    .then( response => {
      console.log(response.data, 'return search data');
      if (response.data.total !== 0){
        dispatch(searchedData(response.data));
        dispatch(setSearchLoading(false));
      }
    })
    .catch(err => {
      console.log(err, 'search err');
      dispatch(setSearchLoading(false));
    });
  };
};

export const postProfile = (data) => {
  console.log(data.username);
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
      formdata.append('username', data.username);
      formdata.append('socketId', data.socketId);
      console.log(formdata);
      axios
        .post('https://findplug.herokuapp.com/profile',formdata,{headers:{
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data; charset=utf-8',
          'Authorization': data.token,
          }},)
        .then(response => {
          console.log(response.data, 'the response');
          AsyncStorage.setItem('profileId', response.data._id);
          dispatch(postSucess(response.data._id));
          dispatch(setPostProfileLoading(false));
        })
        .catch((err) => {
          console.log(err, 'its  err err err err');
          dispatch(setPostProfileLoading(false));
        });
    };
  };


// eslint-disable-next-line no-unused-vars
const addAlreadyPostedProfile = (profileId, userId) => {
  console.log('tryed addin data');
  const formdata = new FormData();
  formdata.append('postedId', profileId);
  formdata.append('userId', userId);
  axios.post('https://findplug.herokuapp.com/postid', formdata)
  .then(response => {
    console.log(response.data);
  })
  .catch((err) => console.log(err));
};

export const getAlreadyPostedProfile = (id) => {
  console.log('tryin getting data');
  axios.post(`https://findplug.herokuapp.com/getPosted/${id}`)
  .then(response => {
    console.log(response.data);
    AsyncStorage.setItem('profileId', response.data.postedId);
  })
  .catch((err) => console.log(err));
};


export const updateProfile = (data) => {
  console.log(data.token, 'yours');
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
      formdata.append('availabilty', data.available);
      formdata.append('username', data.username);
      console.log(formdata, 'available');
        axios.put(`https://findplug.herokuapp.com/profile/${data.profileId}`,formdata,{headers:{
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data; charset=utf-8',
          'Authorization': data.token,
          }},)
        .then(response => {
          console.log(response.data, 'the response');
          dispatch(retrieveProfileDetail(response.data.profile._id));
          dispatch(setUpdateProfileLoading(false));
        })
        .catch((err) => {
          console.log(err, 'its  err err err err');
          dispatch(setUpdateProfileLoading(false));
        });
  };
};


export const getProfilePic = (pic) => {
  return {
    type:actionTypes.SET_PROFILE_PIC,
    profilePic:pic,
  };
};


export const retrieveProfileDetail = (id) => {
  console.log('got here', id);
  return dispatch => {
    axios.get(`https://findplug.herokuapp.com/profile/${id}`)
    .then(response => {
      console.log(response.data, 'urs');
      dispatch(getProfileIdData(response.data));
      dispatch(setRetreiveProfileLoading(true));
    })
    .catch((err) => {
      console.log(err, 'its id err');
      dispatch(setUpdateProfileLoading(false));
    });
  };
};

export const getProfileIdData = (id) => {
  return {
    type:actionTypes.GET_PROFILE_ID_DATA,
    profileIdData:id,
    updateSuccesFull:'updateSuccessfull',
  };
};

export const profileData = (data) => {
  return {
    type:actionTypes.GET_PROFILE_DATA,
    profileData:data,
  };
};

export const getAllProfile = (pageNum) => {
  console.log('it got here', pageNum);
  return dispatch => {
    axios.get(`https://findplug.herokuapp.com/profile?query=male&page=${pageNum}`)
    .then(response => {
      console.log(response.data);
      dispatch(setAllProfileLoading(false));
      // console.log(response.data, 'retriev data');
      if (response.data.total !== 0){
        dispatch(profileData(response.data));
      }

    })
    .catch((err) => {
      console.log(err, 'ur err');
      dispatch(setAllProfileLoading(false));
    });
  };
};
