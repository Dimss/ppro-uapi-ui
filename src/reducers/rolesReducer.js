import {SET_ROLES_SYANKEY_DATA} from "../actions/rolesActions";

const defaultState = {
    sankeyData: null

};


const rolesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ROLES_SYANKEY_DATA:
            return Object.assign({}, state, {sankeyData: action.sankeyData});
        default:
            return state
    }
};

export default rolesReducer;