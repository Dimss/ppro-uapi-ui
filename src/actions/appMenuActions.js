import ApiClient from "../api/ApiClient";
import {fetchRolesSankeyData} from "./rolesActions";
import {fetchRolesBindingsSankeyData} from "./rolesBindingsActions";
import {notification} from 'antd';

export const SET_SELECTED_KEYS = 'SET_SELECTED_KEYS';
export const SET_OPEN_KEYS = 'SET_OPEN_KEYS';
export const SET_NAMESPACES = 'SET_NAMESPACES';
export const SET_SELECTED_NS = 'SET_SELECTED_NS';

export const setSelectedNs = (selectedNs) => {
    return {
        type: SET_SELECTED_NS,
        selectedNs: selectedNs
    }
};

export const setNamespaces = (namespaces) => {
    return {
        type: SET_NAMESPACES,
        namespaces: namespaces
    }
};

export const setSelectedKeys = (keyPath) => {
    return {
        type: SET_SELECTED_KEYS,
        keyPath: keyPath
    }
};

export const setOpenKeys = (keyPath) => {
    return {
        type: SET_OPEN_KEYS,
        keyPath: keyPath
    }
};

export function fetchNsData() {
    return async (dispatch, getState) => {
        let err, resData;
        [err, resData] = (await new ApiClient().getNamespaces());
        dispatch(setNamespaces(resData.data));
    }
}

export function populateSelectedNs() {
    return async (dispatch, getState) => {
        const {selectedKeys} = getState().appMenuReducer;
        let routeKey = selectedKeys[selectedKeys.length - 1];
        switch (routeKey) {
            case "roles":
                dispatch(fetchRolesSankeyData());
                break;
            case "rolebindings":
                dispatch(fetchRolesBindingsSankeyData());
                break;

        }
    }
}


export function appNotification(type, message, description) {
    return async (dispatch, getState) => {
        notification[type]({
            message: message,
            description: description,
        });
    }
}

