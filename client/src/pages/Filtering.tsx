import React, { useEffect, useState } from 'react';
import { Col, Container,Image, Row } from 'react-bootstrap';
import { Button, Card, Grid} from '@mui/material';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Service } from '../Service';
import { Product } from '../models/Product';
import MediaCard from '../components/Card'
import { PRODUCT_ROUTE, FILTER_ROUTE } from '../utils/consts';

const Filtering = () => {

    const location = useLocation()
    location.pathname = FILTER_ROUTE
    
    const link : any = useParams()
    console.log(link.id)
    
    const history = useHistory()
    console.log(history)
    
  const service: Service = new Service();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {async function get() {
        const prod = await service.getProducts();
        setProducts(prod);
    }; get()
    }, []);

console.log(products)
  return (
            <div style={{justifyContent:'center', marginTop:12, marginLeft: 80,marginRight: 80, display:'flex'}}>
                {
                    products.map(value => 
                        <Grid onClick={() => history.push(PRODUCT_ROUTE + '/' + value.id) }>
                            {value.categoryType.id === link.id ?
                                                                <div style={{justifyContent:'center', marginLeft: 16, display:'flex'}}>
                                                                    <MediaCard  product = {value} > </MediaCard>
                                                                </div>
                                                                :
                                                                null
                            }
 
                        </Grid>   
                    )
                }
            </div>
  );
}

export default Filtering;