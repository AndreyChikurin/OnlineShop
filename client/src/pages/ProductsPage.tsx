import React from 'react';
import { Col, Container,Image, Row } from 'react-bootstrap';
import { Button, Card} from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {

    const product = {id:"1",
                    name:"Longines Master Collection",
                    price:90.00,
                    img:"https://luks33.ru/image/cache/catalog/mens/0/timenn-ru-image-cache-data-Longines-rovno-longines-20master-20goldentimenn-ru-3-990x990-900x900.jpg",
                    quantity:10,
                    categoryType:{id:"2",
                                name:"Quartz Watches",
                                description:"Built with quartz battery at the very core, quartz watch movements are one of the most reliable forms of timekeeping"}}
    
        
    return (
        <Container>
        <Container style={{marginTop:20, marginLeft:20,  display:'flex', justifyContent:'center'}}>
            <Col >
                <Card style={{justifyContent:'center', display:'flex', flex:'column',alignItems:'center', width:500,height:500, fontSize:32, border:'lightgray', marginLeft:20}}>
                    <Image width={500} height={500} src={product.img} />
                </Card>
            </Col>
            <Col style={{marginLeft:20}}>
                <Row>
                    <h2>{product.name}</h2>
                    <div>
                        {product.categoryType.name}
                    </div>
                </Row>
            </Col>
            <Col >
                <Card style={{ display:'flex',alignItems:'center', width:300,height:250, fontSize:32, border:'lightgray', marginLeft:20,flexDirection:'column'}}>
                    <h5>Available for order: {product.quantity}</h5>
                    <div >{product.price}$</div>
                    <Button variant="outlined" color="success" style={{marginTop:14}}>Add to basket</Button>
                </Card>
            </Col>
        </Container>
            <Container style={{marginTop:20, marginLeft:20, alignItems:'top', display:'flex', justifyContent:'center'}}>
                <Row>
                    <h3>{product.categoryType.description}</h3>
                </Row>
            </Container>
        </Container>
    );
};

export default ProductsPage;