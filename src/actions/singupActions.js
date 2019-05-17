import ApiClient from "../api/ApiClient";
import {push} from 'react-router-redux'

import {appNotification} from "./appMenuActions";

export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';


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

export const setFirstName = (firstName) => {
    return {
        type: SET_FIRST_NAME,
        firstName: firstName
    }
};

export const setLastName = (lastName) => {
    return {
        type: SET_LAST_NAME,
        lastName: lastName
    }
};


export function signup() {
    return async (dispatch, getState) => {
        const {email, password, firstName, lastName} = getState().signupReducer;
        let err, resData;
        [err, resData] = (await new ApiClient().signup(email, password, firstName, lastName));
        if (err) {
            if (err.response.status === 409)
                dispatch(appNotification("error", "Email already taken"));
            else {
                dispatch(appNotification("error", "Error during sing up, please try later"));
            }

        } else {
            dispatch(appNotification("success", "Successfully sing up!"));
            dispatch(push('/login'))
        }
    }
}

