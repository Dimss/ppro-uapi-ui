import {SET_AUTHENTICATED} from "../actions/appMenuActions";

const defaultState = {
    isAuth: false
};


const appMenuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return Object.assign({}, state, {isAuth: action.isAuth});
        default:
            return state
    }
};

export default appMenuReducer;