import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Service } from 'src/Service';
import MediaCard from './Card';
import { Product } from 'src/models/Product';
import { useHistory } from 'react-router-dom';
import { PRODUCT_ROUTE } from 'src/utils/consts';

export default function CardsGrid() {
  
  const history = useHistory()
    
  const service: Service = new Service();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {async function get() {
        const prod = await service.getProducts();
        setProducts(prod);
  }; get()
}, []);
  return (
            <Grid container spacing={2} justifyContent="center">
                {
                    products.map(value => 
                        <Grid item key={value.id} onClick={() => history.push(PRODUCT_ROUTE + '/' + value.id)}>
                            <MediaCard product = {value} ></MediaCard>
                        </Grid>   
                    )
                }
            </Grid>
  );
  
}
