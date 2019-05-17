import ApiClient from "../api/ApiClient";
import {appNotification} from "./appMenuActions";

export const SET_CLUSTER_ROLES_BINDINGS_SYANKEY_DATA = 'SET_CLUSTER_ROLES_BINDINGS_SYANKEY_DATA';

export const setClusterRoleBindingsData = (sankeyData) => {
    return {
        type: SET_CLUSTER_ROLES_BINDINGS_SYANKEY_DATA,
        sankeyData: sankeyData
    }
};


export function fetchClusterRolesBindingsSankeyData() {
    return async (dispatch, getState) => {
        let err, resData;
        [err, resData] = (await new ApiClient().getClusterRolesBindingsSankeyGraphData());
        dispatch(setClusterRoleBindingsData(null));
        if (resData.data.nodes === null || resData.data.links === null) {
            dispatch(appNotification("warning", "Empty result set for cluster role bindings "));
        } else {
            dispatch(setClusterRoleBindingsData(resData.data));
        }
    }
}
