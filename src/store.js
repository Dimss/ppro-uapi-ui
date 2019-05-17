import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import {connectRouter} from 'connected-react-router'
import {routerMiddleware} from "react-router-redux";
import thunk from 'redux-thunk';
import appMenuReducer from "./reducers/appMenuReducer"
import dashboardReducer from "./reducers/dashboardReducer";
import rolesReducer from "./reducers/rolesReducer";
import clusterRolesReducer from "./reducers/clusterRolesReducer";
import clusterRolesBindingsReducer from "./reducers/clusterRolesBindingsReducer";
import roleBindingsReducer from "./reducers/roleBindingsReducer";
import loginReducer from "./reducers/loginReducer"
import userReducer from "./reducers/userReducer"

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);
export const store = createStore(
    combineReducers({
        appMenuReducer,
        dashboardReducer,
        rolesReducer,
        clusterRolesReducer,
        roleBindingsReducer,
        clusterRolesBindingsReducer,
        loginReducer,
        userReducer,
        router:
            connectRouter(history),
    }),
    applyMiddleware(thunk, historyMiddleware)
    )
;