import {SET_CLUSTER_ROLES_BINDINGS_SYANKEY_DATA} from "../actions/clusterRolesBindingsActions";

const defaultState = {
    sankeyData: null
};


const clusterRolesBindingsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CLUSTER_ROLES_BINDINGS_SYANKEY_DATA:
            return Object.assign({}, state, {sankeyData: action.sankeyData});
        default:
            return state
    }
};

export default clusterRolesBindingsReducer;