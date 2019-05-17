import ApiClient from "../api/ApiClient";
import {appNotification} from "./appMenuActions";

export const SET_CLUSERR_ROLES_SYANKEY_DATA = 'SET_CLUSERR_ROLES_SYANKEY_DATA';

export const setCluseterRolesSankeyData = (sankeyData) => {
    return {
        type: SET_CLUSERR_ROLES_SYANKEY_DATA,
        sankeyData: sankeyData
    }
};


export function fetchClusetrRolesSankeyData() {
    return async (dispatch, getState) => {
        let err, resData;
        [err, resData] = (await new ApiClient().getClusterRolesSankeyGraphData());
        dispatch(setCluseterRolesSankeyData(null));
        if (resData.data.nodes === null || resData.data.links === null) {
            dispatch(appNotification("warning", "Empty result set for cluster roles"));
        } else {
            dispatch(setCluseterRolesSankeyData(resData.data));
        }
    }
}
