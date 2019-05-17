import React from 'react';
import {Row, Col, Input, Icon, InputGroup, Button} from 'antd';
import {setEmail, setFirstName, setLastName, setPassword, signup} from "../../actions/singupActions";

export default class Signup extends React.Component {
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
                        <span style={{fontSize: "50px", fontWeight: "bold"}}>sign up</span>
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
                            <Input
                                style={{"marginTop": "5px"}}
                                addonAfter={<Icon type="minus"/>}
                                placeholder="First name"
                                value={this.props.firstName}
                                onChange={(e) => {
                                    this.props.dispatch(setFirstName(e.target.value));
                                }}
                            />
                            <Input
                                style={{"marginTop": "5px"}}
                                addonAfter={<Icon type="minus"/>}
                                placeholder="Last name"
                                value={this.props.lastName}
                                onChange={(e) => {
                                    this.props.dispatch(setLastName(e.target.value));
                                }}
                            />

                            <Button
                                size="large"
                                style={{width: "100%", "marginTop": "5px"}}
                                type="primary"
                                onClick={() => {
                                    this.props.dispatch(signup())
                                }}>
                                Sign up
                            </Button>
                        </Input.Group>


                    </div>

                </Col>

            </Row>
        );
    }
}
