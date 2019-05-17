import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import {connectRouter} from 'connected-react-router'
import {routerMiddleware} from "react-router-redux";
import thunk from 'redux-thunk';
import appMenuReducer from "./reducers/appMenuReducer"
import loginReducer from "./reducers/loginReducer"
import userReducer from "./reducers/userReducer"
import signupReducer from "./reducers/signupReducer"
import adminReducer from "./reducers/adminReducer"

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);
export const store = createStore(
    combineReducers({
        appMenuReducer,
        loginReducer,
        userReducer,
        signupReducer,
        adminReducer,
        router: connectRouter(history)
    }),
    applyMiddleware(thunk, historyMiddleware));