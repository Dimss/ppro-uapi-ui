import React from 'react';
import {Menu, Row, Col, Button} from 'antd';
import {push} from 'react-router-redux'
import {setIdentity} from "../../actions/loginActions";

export default class AppMenu extends React.Component {
    componentDidMount() {
        let identity = localStorage.getItem("identity");
        if (!identity) {
            this.props.dispatch(push('/login'));
        } else {
            identity = JSON.parse(identity);
            this.props.dispatch(setIdentity(identity))
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
                    <div style={{marginTop: -6}}>
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
                    </div>
                </Col>
            </Row>

        );
    }
}
