import {SET_LOGIN_EMAIL, SET_IDENTITY, SET_LOGIN_PASSWORD} from "../actions/loginActions";

const defaultState = {
    email: "admin@admin",
    password: "admin",
    identity: {}
};


const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOGIN_EMAIL:
            return Object.assign({}, state, {email: action.email});
        case SET_LOGIN_PASSWORD:
            return Object.assign({}, state, {password: action.password});
        case SET_IDENTITY:
            return Object.assign({}, state, {identity: action.identity});
        default:
            return state
    }
};

export default loginReducer;