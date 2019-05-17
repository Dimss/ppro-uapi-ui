import React from 'react';
import {Row, Col, Card, Button, Input, Icon} from 'antd';
import {fetchUser, setUserFirstName, setUserLastName} from "../../actions/userActions";

export default class User extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUser());
    }


    render() {
        return (
            <Row>
                <Col span={24}>
                    <Card
                        title="User info"
                        actions={[<Button type="primary">Save</Button>]}>
                        <Row>
                            <Col span={12}>

                                <Input.Group>
                                    <Input
                                        style={{"marginTop": "5px"}}
                                        addonAfter={<Icon type="mail"/>}
                                        placeholder="Email"
                                        readOnly={true}
                                        value={this.props.email}
                                    />
                                    <Input
                                        style={{"marginTop": "5px"}}
                                        addonAfter={<Icon type="minus"/>}
                                        placeholder="First name"
                                        value={this.props.firstName}
                                        onChange={(e) => {
                                            this.props.dispatch(setUserFirstName(e.target.value));
                                        }}
                                    />
                                    <Input
                                        style={{"marginTop": "5px"}}
                                        addonAfter={<Icon type="minus"/>}
                                        placeholder="Last name"
                                        value={this.props.lastName}
                                        onChange={(e) => {
                                            this.props.dispatch(setUserLastName(e.target.value));
                                        }}
                                    />

                                </Input.Group>
                            </Col>
                        </Row>

                    </Card>

                </Col>

            </Row>
        );
    }
}
