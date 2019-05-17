import ApiClient from "../api/ApiClient";
import {notification} from 'antd';
import {appNotification} from "./appMenuActions";

export const SET_USER = 'SET_USER';


export const setUser = (user) => {
    return {
        type: SET_USER,
        user: user
    }
};


export function fetchUser() {
    return async (dispatch, getState) => {
        const {identity} = getState().loginReducer;
        console.log(identity);
        let err, resData;
        [err, resData] = (await new ApiClient().getUser(identity.email, identity.token));
        if (err) {
            dispatch(appNotification("error", "Error fetching user data"));
        } else {
            dispatch(setUser(resData.data.data));
        }
    }
}

