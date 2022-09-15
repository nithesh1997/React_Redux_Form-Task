import { Button, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editStatus, finalEdit } from '../reducer/user'

const EditItem = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const { editItem } = props.login
    const [editState, setEditState] = useState({})
    // setEditState(editItem)


    useEffect(() => {
        { editItem.title && setEditState(editItem) }
    }, [editItem])


    const showModal = () => {
        setIsModalOpen(true);
        props.editDispatch(true)
    };

    const handleOk = () => {
        setIsModalOpen(false);
        props.editDispatch(false)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        props.editDispatch(false)
    };


    function handleChange(e) {
        setEditState({
            ...editState,
            [e.target.id]: e.target.value
        })
    }

    const { status } = props.login.editStatus

    function handleEdit() {
        setTimeout(() => {
            handleOk()
        }, 5)
        props.editFinalDispatch(editState)
    }

    return (
        <>
            <Modal title="Basic Modal" open={status} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <label htmlFor="">Title</label>
                <input type="text" id='title' onChange={(data) => handleChange(data)} value={editState.title} /><br />
                <label htmlFor="">Date</label>
                <input type="date" id='date' onChange={(data) => handleChange(data)} value={editState.date} /><br />
                <label htmlFor="">Description</label>
                <input type="text" id='description' onChange={(data) => handleChange(data)} value={editState.description} />
                <button className='btn' onClick={() => handleEdit()}>Edit</button>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        editDispatch: (e) => dispatch(editStatus(e)),
        editFinalDispatch: (e) => dispatch(finalEdit(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);