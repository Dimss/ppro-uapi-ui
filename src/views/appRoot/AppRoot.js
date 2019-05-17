import React from 'react';
import {Layout} from 'antd';
import {Route, Redirect} from 'react-router'
import AppMenu from '../../containers/AppMenuContainer'
import Login from "../../containers/LoginContainer"
import User from "../../containers/UserContainer"
import Signup from "../../containers/SignupContainer"
import Admin from "../../containers/AdminContainer"

const {Content, Header} = Layout;


export default class AppRoot extends React.Component {
    render() {
        return (
            <Layout>
                <Header>
                    <div className="logo">uapi ui</div>
                    <AppMenu/>
                </Header>
                <Layout>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#f0f2f5'}}>
                        <Route path="/" exact render={() => (<Redirect to="/login"/>)}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/admin" component={Admin}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
