import React from 'react';
import {Menu, Row, Col, Button} from 'antd';
import {push} from 'react-router-redux'
import {setLoginEmail, setIdentity} from "../../actions/loginActions";
import {setAuthenticated} from "../../actions/appMenuActions";

export default class AppMenu extends React.Component {

    componentDidMount() {
        let identity = localStorage.getItem("identity");
        if (!identity) {
            this.props.dispatch(push('/login'));
        } else {
            identity = JSON.parse(identity);
            this.props.dispatch(setIdentity(identity));
            this.props.dispatch(setLoginEmail(identity.email));
            this.props.dispatch(setAuthenticated(true))
        }
    }


    render() {
        return (
            <Row>
                <Col span={18}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={this.props.selectedKeys}
                        style={{lineHeight: '50px'}}
                    >
                    </Menu>
                </Col>
                <Col span={4}>

                    {!this.props.isAuth ? <div style={{marginTop: -6}}>
                        <Button
                            ghost
                            type="primary"
                            onClick={() => {
                                this.props.dispatch(push('/login'))
                            }}
                        >Log In</Button>
                        <Button
                            style={{marginLeft: "5%"}}
                            type="primary"
                            onClick={() => {
                                this.props.dispatch(push('/signup'))
                            }}>Sign up</Button>
                    </div> : <div style={{marginTop: -6}}>
                        <span style={{color: "white", fontWeight: "bold"}}>{this.props.email}</span>
                        <Button
                            ghost
                            type="primary"
                            style={{marginLeft: "10px"}}
                            onClick={() => {
                                localStorage.removeItem("identity");
                                this.props.dispatch(setAuthenticated(false));
                                this.props.dispatch(push('/login'))
                            }}
                        >Log out</Button>
                    </div>}

                </Col>
            </Row>
        );
    }
}
