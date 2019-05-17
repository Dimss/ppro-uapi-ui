import ApiClient from "../api/ApiClient";
import {appNotification} from "./appMenuActions";

export const SET_ROLES_SYANKEY_DATA = 'SET_ROLES_SYANKEY_DATA';

export const setRolesSankeyData = (sankeyData) => {
    return {
        type: SET_ROLES_SYANKEY_DATA,
        sankeyData: sankeyData
    }
};


export function fetchRolesSankeyData() {
    return async (dispatch, getState) => {
        const {selectedNs} = getState().appMenuReducer;
        let err, resData;
        [err, resData] = (await new ApiClient().getRolesSankeyGraphData(selectedNs));
        // Cleanup old graph data
        dispatch(setRolesSankeyData(null));
        if (resData.data.nodes === null || resData.data.links === null) {
            dispatch(appNotification("warning", "Empty result set for namespace " + selectedNs));
        } else {

            dispatch(setRolesSankeyData(resData.data));
        }
    }
}
