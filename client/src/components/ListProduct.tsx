import { Key, useContext, useEffect, useState } from 'react';
import { Service } from '../Service';
import { Product } from '../models/Product';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';

const ListProduct = observer(() => { 
    const {product} = useContext(Context)

    return (
      <Row style={{display:'flex'}}>
          {product.products.map((product: { id: Key | null | undefined; }) =>
            <ProductItem key={product.id} product={product}/>
          )}
      </Row>
    );  
});

export default ListProduct;
