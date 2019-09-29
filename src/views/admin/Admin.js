import React from 'react';
import {Row, Col, Card, Table, Tag} from 'antd';
import {push} from 'react-router-redux'
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
                render: text => <a onClick={(e) => {
                    this.props.dispatch(push(`/user/${text}`));
                }}>{text}</a>,
            },
            {
                title: 'First name',
                dataIndex: 'firstName',
                key: 'firstName',
            },
            {
                title: 'Last name',
                dataIndex: 'lastName',
                key: 'lastName',
            },
            {
                title: 'Role',
                key: 'roleName',
                dataIndex: 'roleName',
                render: roleName => (
                    <span>
                        <Tag color={roleName === "admin" ? "volcano" : "green"}
                             key={roleName}>{roleName.toUpperCase()}</Tag>
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
