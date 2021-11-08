import { useEffect, useState } from 'react';
import { Grid} from '@mui/material';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Service } from '../Service';
import { Product } from '../models/Product';
import MediaCard from '../components/Card'
import { PRODUCT_ROUTE, FILTER_ROUTE } from '../utils/consts';

const Filtering = () => {

    const location = useLocation()
    location.pathname = FILTER_ROUTE
    
    const link : any = useParams()
    
    const history = useHistory()
    

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {async function get() {
    const service: Service = new Service();
    const prod = await service.getProducts();
    setProducts(prod);
    }; get()
    }, []);

  return (
            <Grid style={{justifyContent:'center', marginTop:4, marginLeft: 68,marginRight: 68, display:'flex'}}>
                {
                    products.map(value => 
                        <Grid onClick={() => history.push(PRODUCT_ROUTE + '/' + value.id) } key={value.id}>
                            {value.categoryType.id === link.id ?
                                                                <Grid style={{justifyContent:'center', margin: 8, display:'flex'}} >
                                                                    <MediaCard  product = {value} > </MediaCard>
                                                                </Grid>
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