/* eslint-disable prettier/prettier */
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    profileData:[],
    searchedData:[],
    sex: null,
    department: null,
    level: null,
    institution: null,
    description: null,
    attributeOne: '',
    attributeTwo: '',
    attributeThree:'',
    attributeFour: '',
    attributeFive: '',
    attributeSix: '',
    attributeSeven: '',
    attributeEight: '',
    availabilty: true,
    profileId:null,
    profileIdData:null,
    updateSuccesFull:'',
    chatContactData:[],
    searchLoading:false,
    postProfileLoading:false,
    allProfileLoading:true,
    updateProfileLoading:false,
    retreiveProfileLoading:false,
    resetSearchloading:false,
};


const getResetSearchLoading = (state, action) => {
    return updateObject(state, {
        resetSearchloading:true,
    });
};


const resetSearchData = (state, action) => {
    return updateObject(state,{
        searchedData:action.searchedData,
    });
};

const getSearchLoading = (state, action) => {
    return updateObject(state, {
        searchLoading:action.searchLoading,
    });
};

const getPostProfileLoading = (state,action) => {
    return updateObject(state,{
        postProfileLoading:action.postProfileLoading,
    });
};

const getAllProfileLoading = (state,action) => {
    return updateObject(state,{
        allProfileLoading:action.allProfileLoading,
    });
};

const getUpdateProfileLoading = (state,action) => {
    return updateObject(state,{
        updateProfileLoading:action.updateProfileLoading,
    });
};

const getRetreiveProfileLoading = (state, action) => {
    return updateObject(state,{
        retreiveProfileLoading:action.retreiveProfileLoading,
    });
};

// const resetLoading = (state, action) => {
//     return updateObject(state,{
//         loading:true,
//     });
// };

// const setSearchData = (state, action) => {
//     return {
//         ...state,
//         searchedData:[...state.searchedData,...action.searchedData.profile],
//     };
// };

// const setSearchData = (state, action) => {
//     return updateObject(state,{
//         searchedData:action.searchedData.profile,
//     });
// };

const setSearchData = (state, action) => {
    // state.profileData.push(...action.profileData.profile)
    return updateObject(state,{
        searchedData:[...state.searchedData,...action.searchedData.profile],
    });
};

const setProfileIdData = (state,action) => {
    return updateObject(state, {
        profileIdData:action.profileIdData,
        updateSuccesFull:action.updateSuccesFull,
    });
};

// const setProfileData = (state, action) => {
//     // state.profileData.push(...action.profileData.profile)
//     return {
//         ...state,
//         profileData:[...state.profileData,...action.profileData.profile],
//     };
// };

const setProfileData = (state, action) => {
    // state.profileData.push(...action.profileData.profile)
    return updateObject(state,{
        profileData:[...state.profileData,...action.profileData.profile],
    });
};





const setPostSuccess = (state, action) => {
    console.log(action.success);
    return updateObject(state, {
        profileId: action.profileId,
    });
};

const setFirstScreenDetail = (state, action) => {
  return updateObject(state, {
    description: action.data.description,
    availabilty: action.data.available,
    sex: action.data.gender,
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
    console.log(action.attributeOne, 'cas1');
    return updateObject(state, {
        attributeOne: action.attributeOne,
    });
};

const setAttributeTwo = (state, action) => {
    console.log(action.attributeTwo, 'cas2');
    return updateObject(state, {
        attributeTwo: action.attributeTwo,
    });
};

const setAttributeThree = (state, action) => {
    console.log(action.attributeThree, 'cas3');
    return updateObject(state, {
        attributeThree: action.attributeThree,
    });
};


const setAttributeFour = (state, action) => {
    console.log(action.attributeFour, 'cas4');
    return updateObject(state, {
        attributeFour: action.attributeFour,
    });
};


const setAttributeFive = (state, action) => {
    console.log(action.attributeFive, 'cas5');
    return updateObject(state, {
        attributeFive: action.attributeFive,
    });
};


const setAttributeSix = (state, action) => {
    console.log(action.attributeSix, 'cas6');
    return updateObject(state, {
        attributeSix: action.attributeSix,
    });
};


const setAttributeSeven = (state, action) => {
    console.log(action.attributeSeven, 'cas7');
    return updateObject(state, {
        attributeSeven: action.attributeSeven,
    });
};

const setAttributeEight = (state, action) => {
    console.log(action.attributeEight, 'cas8');
    return updateObject(state, {
        attributeEight: action.attributeEight,
    });
};


const resetAttributeOne = (state, action) => {
    return updateObject(state, {
        attributeOne:action.attributeOne,
    });
};


const resetAtrributeTwo = (state, action) => {
    return updateObject(state, {
        attributeTwo:action.attributeTwo,
    });
};

const resetAttributeThree = (state, action) => {
    return updateObject(state, {
        attributeThree:action.attributeThree,
    });
};


const resetAtrributeFour = (state, action) => {
    return updateObject(state, {
        attributeFour:action.attributeFour,
    });
};


const resetAttributeFive = (state, action) => {
    return updateObject(state, {
        attributeFive:action.attributeFive,
    });
};

const resetAtrributeSix = (state, action) => {
    return updateObject(state, {
        attributeSix:action.attributeSix,
    });
};

const resetAttributeSeven = (state, action) => {
    return updateObject(state,{
        attributeSeven:action.attributeSeven,
    });
};


const resetAttributeEight = (state, action) => {
    return updateObject(state, {
        attributeEight:action.attributeEight,
    });
};

const updateChatContact = (state, action) => {
    return updateObject(state, {
        chatContactData:action.chatContactData,
    });
};

const refreshHomePage = (state, action) => {
    return updateObject(state,{
        profileData:action.profileData,
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
    case actionTypes.SET_ATTRIBUTE_FIRST:
        console.log('got one');
        return setAttributeOne(state, action);
    case actionTypes.SET_ATTRIBUTE_SECOND:
        return setAttributeTwo(state, action);
    case actionTypes.SET_ATTRIBUTE_THIRD:
        return setAttributeThree(state, action);
    case actionTypes.SET_ATTRIBUTE_FOURTH:
        return setAttributeFour(state, action);
    case actionTypes.SET_ATTRIBUTE_FIFTH:
        return setAttributeFive(state, action);
    case actionTypes.SET_ATTRIBUTE_SIXTH:
        return setAttributeSix(state,action);
    case actionTypes.SET_ATTRIBUTE_SEVENTH:
        return setAttributeSeven(state, action);
    case actionTypes.SET_ATTRIBUTE_EIGHTH:
        return setAttributeEight(state,action);
    case actionTypes.POST_SUCCESS:
        return setPostSuccess(state,action);
    case actionTypes.GET_PROFILE_DATA:
        return setProfileData(state, action);
    case actionTypes.GET_PROFILE_ID_DATA:
        return setProfileIdData(state,action);
    case actionTypes.GET_SEARCH_DATA:
        return setSearchData(state,action);
    case actionTypes.RESET_SEARCH_DATA:
        return resetSearchData(state,action);
    case actionTypes.RESET_ATTRIBUTE_ONE:
        return resetAttributeOne(state, action);
    case actionTypes.RESET_ATTRIBUTE_TWO:
        return resetAtrributeTwo(state, action);
    case actionTypes.RESET_ATTRIBUTE_THREE:
        return resetAttributeThree(state, action);
    case actionTypes.RESET_ATTRIBUTE_FOUR:
        return resetAtrributeFour(state, action);
    case actionTypes.RESET_ATTRIBUTE_FIVE:
        return resetAttributeFive(state, action);
    case actionTypes.RESET_ATTRIBUTE_SIX:
        return resetAtrributeSix(state, action);
    case actionTypes.RESET_ATTRIBUTE_SEVEN:
        return resetAttributeSeven(state,action);
    case actionTypes.RESET_ATTRIBUTE_EIGHT:
        return resetAttributeEight(state, action);
    case actionTypes.CHAT_CONTACT:
        return updateChatContact(state, action);
    case actionTypes.REFRESH_HOME_PAGE:
        return refreshHomePage(state, action);
    case actionTypes.SET_SEARCH_LOADING:
        return getSearchLoading(state, action);
    case actionTypes.SET_POST_PROFILE_LOADING:
        return getPostProfileLoading(state, action);
    case actionTypes.SET_UPDATE_PROFILE_LOADING:
        return getUpdateProfileLoading(state, action);
    case actionTypes.SET_RETRIEVE_PROFILE_LOADING:
        return getRetreiveProfileLoading(state,action);
    case actionTypes.SET_ALL_PROFILE_LOADING:
        return getAllProfileLoading(state, action);
    case actionTypes.RESET_SEARCH_LOADING:
        return getResetSearchLoading(state,action);

    default:
        return state;
  }
};

export default reducer;
