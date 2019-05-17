import {
    SET_SELECTED_KEYS,
    SET_OPEN_KEYS, SET_NAMESPACES, SET_SELECTED_NS
} from '../actions/appMenuActions'

const defaultState = {
    selectedKeys: [],
    openKeys: [],
    namespaces: [],
    selectedNs: 'kube-service-catalog'
};


const appMenuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECTED_KEYS:
            let menuItems = window.location.pathname.split("/");
            menuItems.splice(menuItems.indexOf(""), 1);
            return Object.assign({}, state, {selectedKeys: action.keyPath});
        case SET_OPEN_KEYS:
            return Object.assign({}, state, {openKeys: action.keyPath});
        case SET_NAMESPACES:
            return Object.assign({}, state, {namespaces: action.namespaces});
        case SET_SELECTED_NS:
            return Object.assign({}, state, {selectedNs: action.selectedNs});
        default:
            return state
    }
};

export default appMenuReducer;