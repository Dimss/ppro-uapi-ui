import {SET_ROLES_BINDINGS_SYANKEY_DATA} from "../actions/rolesBindingsActions";

const defaultState = {
    sankeyData: null
};


const roleBindingsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ROLES_BINDINGS_SYANKEY_DATA:
            return Object.assign({}, state, {sankeyData: action.sankeyData});
        default:
            return state
    }
};

export default roleBindingsReducer;