import {notification} from 'antd';

export const SET_SELECTED_KEYS = 'SET_SELECTED_KEYS';
export const SET_OPEN_KEYS = 'SET_OPEN_KEYS';
export const SET_NAMESPACES = 'SET_NAMESPACES';
export const SET_SELECTED_NS = 'SET_SELECTED_NS';


export function appNotification(type, message, description) {
    return async (dispatch, getState) => {
        notification[type]({
            message: message,
            description: description,
        });
    }
}

