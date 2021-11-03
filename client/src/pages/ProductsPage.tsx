import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Button, Card, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Service } from 'src/Service';
import { Product } from 'src/models/Product';

const ProductsPage = () => {
  const link: any = useParams();
  console.log(link.id);

  const service: Service = new Service();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function get() {
      const prod = await service.getProduct(link.id);
      setProduct(prod);
    }
    get();
  }, []);

  return (
    <Grid style={{ display: 'flex', justifyContent: 'center', margin: 20}}>
      <Grid style={{ display: 'flex', justifyContent: 'center', background: '#DAA520',width: 860, height: 540 }}>
        <>
          <Card
            style={{
              justifyContent: 'center',
              display: 'flex',
              flex: 'column',
              alignItems: 'center',
              width: 500,
              height: 500,
              fontSize: 32,
              border: 'lightgray',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Image width={500} height={500} src={product?.imgUrl} />
          </Card>
        </>
        <div style={{ marginLeft: 20, marginTop: 20,width: 300, height: 500}}>
          <h2>{product?.name}</h2>
          <h2>Available for order: {product?.quantity}</h2>
          <h3
            style={{ 
              marginTop: 20,
              display: 'flex',
              justifyContent: 'center',
              width: 300
            }}>
            {product?.categoryType.description}
          </h3>
          <Card
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 300,
              height: 100,
              fontSize: 32,
              border: 'lightgray',
              flexDirection: 'column',
              background: '#fffadd'
            }}
          >
            <div>{product?.price}$</div>
            <Button variant="outlined" color="success" style={{ marginTop: 14 }}>
              Add to basket
            </Button>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
