import ApiClient from "../api/ApiClient";
import {notification} from 'antd';
import {push} from 'react-router-redux'

import {appNotification} from "./appMenuActions";

export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_IDENTITY = 'SET_IDENTITY';


export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        email: email
    }
};

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        password: password
    }
};

export const setIdentity = (identity) => {
    return {
        type: SET_IDENTITY,
        identity: identity
    }
};


export function login() {
    return async (dispatch, getState) => {
        const {email, password} = getState().loginReducer;
        let err, resData;
        [err, resData] = (await new ApiClient().login(email, password));
        if (err) {
            dispatch(appNotification("error", "Bad username or password"));
            dispatch(setEmail(""));
            dispatch(setPassword(""));
        } else {
            dispatch(appNotification("success", "Welcome " + resData.data.data.email));
            localStorage.setItem("identity", JSON.stringify(resData.data.data));
            dispatch(setIdentity(resData.data.data));
            dispatch(push('/user'))
        }
    }
}

