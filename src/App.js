import React, {Component} from 'react';
import AppRoot from './views/appRoot/AppRoot'
import './App.css';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {Switch} from 'react-router'
import {store, history} from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history} basename={window.location.pathname}>
                    <Switch>
                        <AppRoot/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
