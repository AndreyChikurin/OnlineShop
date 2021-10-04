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
            <Grid container spacing={0} justifyContent="center" style={{justifyContent:'center', marginTop:12, marginLeft: 80,marginRight: 80}}>
                {
                    products.map(value => 
                        <Grid onClick={() => history.push(PRODUCT_ROUTE + '/' + value.id) }>
                            {value.categoryType.id === link.id ?
                                                                <MediaCard product = {value} > </MediaCard>
                                                                :
                                                                null
                            }

                        </Grid>   
                    )
                }
            </Grid>
  );
}

export default Filtering;