import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from 'src';
import CardsGrid from 'src/components/CardsGrid';
import { fetchProducts } from '../http/productAPI';

const Shop = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchProducts().then(data => product.setProducts(data));
  }, []);
  console.log(product);
  return (
    <div style={{ marginTop: 12,marginBottom: 80, marginLeft: 300, marginRight: 300 }}>
      <CardsGrid />
    </div>
  );
});

export default Shop;
