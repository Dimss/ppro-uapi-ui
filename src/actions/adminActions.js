import ApiClient from "../api/ApiClient";
import {appNotification} from "./appMenuActions";

export const SET_USERS_LIST = 'SET_USERS_LIST';
export const SET_DELETE_USER_EMAIL = 'SET_DELETE_USER_EMAIL';

export const setUsersList = (users) => {
    return {
        type: SET_USERS_LIST,
        users: users
    }
};

export const setDeleteUserEmail = (email) => {
    return {
        type: SET_DELETE_USER_EMAIL,
        email: email
    }
};


export function fetchUsers() {
    return async (dispatch, getState) => {
        const {identity} = getState().loginReducer;
        console.log(identity);
        let err, resData;
        [err, resData] = (await new ApiClient().getUsers(identity.token));
        if (err) {
            dispatch(appNotification("error", "Error fetching users list data"));
        } else {
            console.log(resData.data.data);
            dispatch(setUsersList(resData.data.data));
        }
    }
}

export function deleteUser() {
    return async (dispatch, getState) => {
        const {deleteEmail} = getState().adminReducer;
        const {identity} = getState().loginReducer;
        if (deleteEmail === "admin@admin") {
            dispatch(appNotification("error", "System user admin@admin can't be deleted"));
            return
        }
        let err, resData;
        [err, resData] = (await new ApiClient().deleteUser(deleteEmail, identity.token));
        if (err) {
            dispatch(appNotification("error", "Error deleting user"));
        } else {
            dispatch(fetchUsers());
        }
    }
}
