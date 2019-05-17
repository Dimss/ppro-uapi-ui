import ApiClient from "../api/ApiClient";
import {appNotification} from "./appMenuActions";

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_FIRST_NAME = 'SET_USER_FIRST_NAME';
export const SET_USER_LAST_NAME = 'SET_USER_LAST_NAME';


export const setUserEmail = (email) => {
    return {
        type: SET_USER_EMAIL,
        email: email
    }
};

export const setUserFirstName = (firstName) => {
    return {
        type: SET_USER_FIRST_NAME,
        firstName: firstName
    }
};

export const setUserLastName = (lastName) => {
    return {
        type: SET_USER_LAST_NAME,
        lastName: lastName
    }
};


export function fetchUser() {
    return async (dispatch, getState) => {
        const {identity} = getState().loginReducer;
        let err, resData;
        [err, resData] = (await new ApiClient().getUser(identity.email, identity.token));
        if (err) {
            dispatch(appNotification("error", "Error fetching user data"));
        } else {
            dispatch(setUserEmail(resData.data.data.email));
            dispatch(setUserFirstName(resData.data.data.firstName));
            dispatch(setUserLastName(resData.data.data.lastName));
        }
    }
}


export function updateUser() {
    return async (dispatch, getState) => {
        const {identity} = getState().loginReducer;
        const {email, firstName, lastName} = getState().userReducer;
        console.log(firstName);
        console.log(lastName);
        let err, resData;
        [err, resData] = (await new ApiClient().updateUser(email, firstName, lastName, identity.token));
        if (err) {
            dispatch(appNotification("error", "Error during updating user"));
        } else {
            dispatch(appNotification("success", "User was successfully updated"));
        }
    }
}

