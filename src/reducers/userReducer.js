import {SET_USER} from "../actions/userActions";

const defaultState = {
    user: {}
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, {user: action.user});
        default:
            return state
    }
};

export default userReducer;