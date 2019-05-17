import {SET_USER_EMAIL, SET_USER_FIRST_NAME, SET_USER_LAST_NAME} from "../actions/userActions";

const defaultState = {
    email: "",
    firstName: "",
    lastName: ""
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_EMAIL:
            return Object.assign({}, state, {email: action.email});
        case SET_USER_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.firstName});
        case SET_USER_LAST_NAME:
            return Object.assign({}, state, {lastName: action.lastName});
        default:
            return state
    }
};

export default userReducer;