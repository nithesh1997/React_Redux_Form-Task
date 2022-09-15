import { Button, Modal } from 'antd';
import { message, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../reducer/user'

const ModalInput = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputChange, setInputChange] = useState({})

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Pop-confirm code
    const confirm = (e) => {
        console.log(e);
        props.loginDispatch(inputChange)
        setInputChange({
            title: "",
            date: "",
            description: ""
        })
        setTimeout(() => {
            setIsModalOpen(false);
        }, 5)
        message.success('Successfully Submited');
    };

    const cancel = (e) => {
        console.log(e);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 5)
        message.error('Click on No');
    };



    // input details to object

    const handleChange = (e) => {
        setInputChange({
            ...inputChange, id: Math.random()
            , [e.target.id]: e.target.value
        })
    }


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <label htmlFor="">Title</label>
                <input type="text" id='title' onChange={(data) => handleChange(data)} value={inputChange.title} required /><br />
                <label htmlFor="">Date</label>
                <input type="date" id='date' onChange={(data) => handleChange(data)} value={inputChange.date} required /><br />
                <label htmlFor="">Description</label>
                <input type="text" id='description' onChange={(data) => handleChange(data)} value={inputChange.description} required />




                <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <button className='btn blue lighten-1' >Submit</button>
                </Popconfirm>
            </Modal>
        </>
    );
};


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginDispatch: (e) => dispatch(login(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalInput);