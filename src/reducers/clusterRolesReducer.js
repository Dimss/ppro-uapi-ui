import {SET_CLUSERR_ROLES_SYANKEY_DATA} from "../actions/clusterRolesActions";

const defaultState = {
    sankeyData: null
};


const clusterRolesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CLUSERR_ROLES_SYANKEY_DATA:
            return Object.assign({}, state, {sankeyData: action.sankeyData});
        default:
            return state
    }
};

export default clusterRolesReducer;