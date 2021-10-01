import React from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material';
import Form from "react-bootstrap/esm/Form";


const CreateCategory = (show: any | boolean , onHide: any ) => {
    return (
        <Modal
            show ={show}    
            onHide={onHide}
        >
            <Modal.Header >
                <Modal.Title >
                Add new category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder={"Category Name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outlined" style={{marginTop:20, width:566}} color="error" onClick={onHide}>Exit</Button>
                <Button variant="outlined" style={{marginTop:20, width:566}} color="success" onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCategory;