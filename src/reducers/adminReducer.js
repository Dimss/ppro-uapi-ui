import {SET_DELETE_USER_EMAIL, SET_USERS_LIST} from "../actions/adminActions";

const defaultState = {
    users: [],
    deleteEmail: ""
};

const adminReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return Object.assign({}, state, {users: action.users});
        case SET_DELETE_USER_EMAIL:
            return Object.assign({}, state, {deleteEmail: action.email});
        default:
            return state
    }
};

export default adminReducer;