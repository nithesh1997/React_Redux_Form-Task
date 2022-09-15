import { Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../reducer/user'
import { viewItem, editStatus, editItem } from '../reducer/user'
import EditItem from './EditItem';



function Cards(props) {

    function handleDelete(e) {

        if (window.confirm("Are You Confirm To Delete")) {
            props.deleteDispatch(e)
        }
    }

    function handleView(e) {
        props.viewDispatch(e)
    }

    function handleEdit(e) {
        props.editItemDispatch(e)
        props.editDispatch(true)
    }






    const { userDetails } = props.login
    const { status } = props.login.editStatus



    return (
        <>
            {userDetails.filter(e => {
                return e.title !== ""
            }).map(e => {
                return (
                    <Card title="User Details" extra={<Dropdown overlay={
                        <Menu
                            items={[
                                {
                                    label: (
                                        <li style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => handleEdit(e.id)}>Edit</li>
                                    ),
                                    key: '0',
                                },
                                {
                                    label: (
                                        <li style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => handleDelete(e.id)}>Delete</li>
                                    ),
                                    key: '1',
                                },
                                {
                                    label: (
                                        <li style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => handleView(e.id)}>View</li>
                                    ),
                                    key: '2',
                                },
                            ]}
                        />
                    }
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                More
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>


                    } style={{ width: 300 }}>
                        <p>Title : {e.title}</p>
                        <p>Date : {e.date}</p>
                        <p>Description : {e.description}</p>
                    </Card>
                )
            })}

            <EditItem />

        </>
    )

}
const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteDispatch: (id) => dispatch(deleteItem(id)),
        viewDispatch: (id) => dispatch(viewItem(id)),
        editDispatch: (edit) => dispatch(editStatus(edit)),
        editItemDispatch: (edit) => dispatch(editItem(edit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);