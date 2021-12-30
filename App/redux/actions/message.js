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

export const getMessage = (receiverId, senderId) => {
    return dispatch => {
        axios.get(`https://findplug.herokuapp.com/profile?receiverId=${receiverId}&senderId=${senderId}`)
        .then(response => {
            console.log(response.data);
            dispatch(getConversation(response.data));
            dispatch(setMessageLoading(false));
        })
        .catch(err => console.log(err));
    };
};
