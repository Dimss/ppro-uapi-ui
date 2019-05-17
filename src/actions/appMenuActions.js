import {notification} from 'antd';

export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';

export const setAuthenticated = (isAuth) => {
    return {
        type: SET_AUTHENTICATED,
        isAuth: isAuth
    }
};

export function appNotification(type, message, description) {
    return async (dispatch, getState) => {
        notification[type]({
            message: message,
            description: description,
        });
    }
}

