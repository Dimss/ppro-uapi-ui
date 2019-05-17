import React from 'react';
import {Row, Col, Card, Button, Table, Divider, Tag} from 'antd';
import {deleteUser, fetchUsers, setDeleteUserEmail} from "../../actions/adminActions";

export default class Admin extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }


    render() {
        const columns = [
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                render: text => <a href="javascript:;">{text}</a>,
            },
            {
                title: 'First name',
                dataIndex: 'firstName',
                key: 'firstName',
            },
            {
                title: 'Last name',
                dataIndex: 'lastName',
                key: 'lastname',
            },
            {
                title: 'Role',
                key: 'role',
                dataIndex: 'role',
                render: role => (
                    <span>
                        <Tag color={role === "admin" ? "volcano" : "green"} key={role}>{role.toUpperCase()}</Tag>
                    </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a onClick={(e) => {
                            this.props.dispatch(setDeleteUserEmail(record.email));
                            this.props.dispatch(deleteUser());
                        }}>Delete</a>
                    </span>
                ),
            },
        ];

        return (
            <Row>
                <Col span={24}>
                    <Card title="Admin info">
                        <Row>
                            <Col span={24}>

                                <Table
                                    columns={columns}
                                    rowKey={record => record.email}
                                    dataSource={this.props.users}/>
                            </Col>
                        </Row>

                    </Card>

                </Col>

            </Row>
        );
    }
}
