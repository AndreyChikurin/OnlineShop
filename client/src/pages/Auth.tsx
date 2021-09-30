
import { flexbox } from '@material-ui/system';
import { Card, Container } from '@mui/material';
import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { Button} from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'src/utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (        
        <Container 
            style={{marginTop:20, justifyContent:'center', alignItems:'center', display:'flex'}}
        >
            <Card  style={{width:600, padding:5, color:'black', justifyContent:'center', background: ""}}>
                <h2 style={{justifyContent:'center', display:'flex'}}>{isLogin ? 'Authorization' : "Registration"}</h2>   
                <Form style={{ padding:5, color:'black', justifyContent:'center' }}>
                    <Form.Control 
                        style={{height:30, width:566, marginTop:7, marginBottom:7 ,marginLeft:7,marginRight:7, display:'flex', justifyContent:'center'}}
                        placeholder="Enter an email"
                    />
                    <Form.Control 
                        style={{height:30, width:566, marginTop:8, marginBottom:7 ,marginLeft:7,marginRight:7, display:'flex', justifyContent:'center'}}
                        placeholder="Enter a password"
                    />
                    <Row style={{justifyContent:'space-between', display:'flex', marginTop:8, marginLeft:8, marginRight:10}}>
                        {isLogin ? 
                                    <div>
                                        Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                                    </div>
                                 :
                                    <div>
                                        Do have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                                    </div>
                        }       
                        <Button 
                            variant="outlined" 
                            color="success"
                        >
                            {isLogin ? 'Join' : 'Registration'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
            
        </Container>
    );
};
export default Auth;