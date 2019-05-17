import React from 'react';
import {Row, Col, Input, Icon, InputGroup, Button} from 'antd';
import {setSelectedKeys} from "../../actions/appMenuActions";
import {login, setEmail, setPassword} from "../../actions/loginActions";

export default class Login extends React.Component {
    componentWillMount() {

    }


    render() {
        return (
            <Row>
                <Col span={12} offset={6}>
                    <div style={{

                        paddingLeft: "20%",
                        paddingRight: "20%",
                        paddingTop: "10%",
                        textAlign: "center"
                    }}>
                        <span style={{fontSize: "50px", fontWeight: "bold"}}>login</span>
                        <Input.Group size="large">
                            <Input
                                style={{"marginTop": "5px"}}
                                addonAfter={<Icon type="mail"/>}
                                placeholder="Email"
                                value={this.props.email}
                                onChange={(e) => {
                                    this.props.dispatch(setEmail(e.target.value));
                                }}
                            />
                            <Input.Password
                                style={{"marginTop": "5px"}}
                                placeholder="Password"
                                value={this.props.password}
                                onChange={(e) => {
                                    this.props.dispatch(setPassword(e.target.value));
                                }}
                            />

                            <Button
                                size="large"
                                style={{width: "100%", "marginTop": "5px"}}
                                type="primary"
                                onClick={() => {
                                    this.props.dispatch(login())
                                }}>
                                login
                            </Button>
                        </Input.Group>


                    </div>

                </Col>

            </Row>
        );
    }
}
