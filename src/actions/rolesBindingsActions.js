import ApiClient from "../api/ApiClient";
import {appNotification} from "./appMenuActions";

export const SET_ROLES_BINDINGS_SYANKEY_DATA = 'SET_ROLES_BINDINGS_SYANKEY_DATA';

export const setRolesBindingsSankeyData = (sankeyData) => {
    return {
        type: SET_ROLES_BINDINGS_SYANKEY_DATA,
        sankeyData: sankeyData
    }
};


export function fetchRolesBindingsSankeyData() {
    return async (dispatch, getState) => {
        let err, resData;
        const {selectedNs} = getState().appMenuReducer;
        [err, resData] = (await new ApiClient().getRolesBindingsSankeyGraphData(selectedNs));
        dispatch(setRolesBindingsSankeyData(null));
        if (resData.data.nodes === null || resData.data.links === null) {
            dispatch(appNotification("warning", "Empty result set for namespace " + selectedNs));
        } else {
            dispatch(setRolesBindingsSankeyData(resData.data));
        }
    }
}
