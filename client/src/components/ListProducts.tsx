import { useEffect, useState } from 'react';
import { Service } from '../Service';
import { Product } from '../models/Product';

const ListProducts = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const service: Service = new Service();
    async function get() {
      const cat = await service.getProducts();
      setProducts(cat);
    }
    get();
  }, []);

  return products;
};

export default ListProducts;