import {SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_PASSWORD} from "../actions/singupActions";

const defaultState = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
};

const signupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            console.log('signup reducer' + action.email);
            return Object.assign({}, state, {email: action.email});
        case SET_PASSWORD:
            return Object.assign({}, state, {password: action.password});
        case SET_FIRST_NAME:
            return Object.assign({}, state, {firstName: action.firstName});
        case SET_LAST_NAME:
            return Object.assign({}, state, {lastName: action.lastName});
        default:
            return state
    }
};

export default signupReducer;