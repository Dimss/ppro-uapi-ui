import ApiClient from "../api/ApiClient";
import {notification} from 'antd';
import {push} from 'react-router-redux'

import {appNotification, setAuthenticated} from "./appMenuActions";

export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const SET_IDENTITY = 'SET_IDENTITY';


export const setLoginEmail = (email) => {
    return {
        type: SET_LOGIN_EMAIL,
        email: email
    }
};

export const setLoginPassword = (password) => {
    return {
        type: SET_LOGIN_PASSWORD,
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
            dispatch(setLoginEmail(""));
            dispatch(setLoginPassword(""));
        } else {
            dispatch(appNotification("success", "Welcome " + resData.data.data.email));
            console.log(resData.data.data);
            localStorage.setItem("identity", JSON.stringify(resData.data.data));
            dispatch(setIdentity(resData.data.data));
            dispatch(setAuthenticated(true));
            if (resData.data.data.role == "admin")
                dispatch(push('/admin'));
            else
                dispatch(push(`/user/${resData.data.data.email}`));
        }
    }
}

