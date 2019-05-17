import React from 'react';
import {Row, Col} from 'antd';
import {fetchUser} from "../../actions/userActions";

export default class User extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUser());
    }


    render() {
        return (
            <Row>
                <Col span={12} offset={6}>
                    user data
                </Col>

            </Row>
        );
    }
}
