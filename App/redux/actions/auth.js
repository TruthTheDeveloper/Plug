/* eslint-disable prettier/prettier */
import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, username) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    username: username,
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('username');
    localStorage.removeItem('refreshTokenLimit')
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const refreshToken = (oldtoken) => {
    let renewToken = {token:oldtoken}
    return dispatch => {
        axios.post('https://querybackendapi.herokuapp.com/api/account/refresh/',renewToken)
        .then(response => {
            const expirationDate = new Date(new Date().getTime() + 300 * 1000);
            localStorage.setItem('token',  `JWT ${response.data.token}`);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('username', response.data.username);
            dispatch(authSuccess(response.data.token, response.data.username));
            dispatch(checkAuthTimeout(300));
        })
        .catch(err => {
            console.log('error', err.response)
            dispatch(authFail(err.response.data.detail));
        })
    }
}

export const checkRefreshTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(refreshToken());
        }, expirationTime * 1000)
    }
}


export const auth = (username, email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        let authData
        let url
        console.log(username, email, password, isSignup)

        if(isSignup){
            authData = {
                username:username,
                email: email,
                password: password,
            };

            url = 'https://querybackendapi.herokuapp.com/api/account/register/';

        }else{
            authData = {
                username:username,
                password: password,
            };

            url = 'https://querybackendapi.herokuapp.com/api/account/';

        }
        
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expires * 1000);
                localStorage.setItem('token',  `JWT ${response.data.token}`);
                localStorage.setItem('tokenRefresh', response.data.token)
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('username', response.data.username);
                // localStorage.setItem('refreshTokenLimit', refreshLimit)
                dispatch(authSuccess(response.data.token, response.data.username));
                dispatch(checkAuthTimeout(300));
            })
            .catch(err => {
                console.log(err.response)
                dispatch(authFail(err.response.data));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};



export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = Date.parse(`${localStorage.getItem('expirationDate')}`);
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const username = localStorage.getItem('username');
                dispatch(authSuccess(token, username));
                dispatch(checkAuthTimeout((expirationDate - new Date().getTime()) / 1000 ));
            }   
        }
    };
};

export const refreshTokenLimit = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = Date.parse(`${localStorage.getItem('refreshTokenLimit')}`);
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const username = localStorage.getItem('username');
                dispatch(authSuccess(token, username));
                dispatch(checkRefreshTimeout((expirationDate - new Date().getTime()) / 1000 ));
            }   
        }
    }
}