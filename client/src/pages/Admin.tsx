import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CreateCategory from '../components/modals/CreateCategory';
//import CreateProduct from '../components/modals/CreateProduct';

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false)
    return (
        <Container 
            style={{marginTop:20, justifyContent:'center', alignItems:'center', display:'flex',flexDirection:'column'}}
        >
            <Button variant="outlined" color="success" style={{marginTop:20, width:566}} onClick ={() => setCategoryVisible(true)}>Add a categoty</Button>
            <Button variant="outlined" style={{marginTop:20, width:566}}>Change a category</Button>
            <Button variant="outlined" color="error" style={{marginTop:20, width:566}}>Delete a category</Button>
            <Button variant="outlined" color="success" style={{marginTop:20, width:566}}>Add a product</Button>
            <Button variant="outlined" style={{marginTop:20, width:566}}>Change a product</Button>
            <Button variant="outlined" color="error" style={{marginTop:20, width:566}}>Delete a product</Button>

            
        </Container>
    );
};
export default Admin;
// <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>