import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import Col from 'react-bootstrap/esm/Col';
import MediaCard from './Card';

const ProductItem = (product: any) => {   
      
    return (
        <Grid item key={product.id}>
            <MediaCard product = {product}></MediaCard>
        </Grid>
    );
};

export default ProductItem;