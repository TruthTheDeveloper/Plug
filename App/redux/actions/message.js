/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getConversation = (data) => {
    return {
        type:actionTypes.GET_CONVERSATION,
        conversation:data,
    };
};

export const setMessageLoading = (data) => {
    return {
        type:actionTypes.SET_MESSAGE_LOADING,
        messageLoading:data,
    };
};

export const getAllConversation = (data) => {
    return {
        type:actionTypes.GET_ALL_CONVERSATION,
        allConversation:data,
    };
};

export const getMessage = (receiverId, senderId) => {
    return dispatch => {
        axios.get(`https://findplug.herokuapp.com/getMessage?receiverId=${receiverId}&senderId=${senderId}`)
        .then(response => {
            // console.log(response.data.message, 'all message');
            dispatch(getConversation(response.data.message));
            dispatch(setMessageLoading(false));
        })
        .catch(err => console.log(err));
    };
};

export const getAllMessage = () => {
    return dispatch => {
        axios.get('https://findplug.herokuapp.com/getAllMessage')
        .then(response => {
            console.log(response.data.message);
            dispatch(getAllConversation(response.data.message));
            // dispatch(setMessageLoading(false));
        })
        .catch(err => console.log(err));
    };
};
