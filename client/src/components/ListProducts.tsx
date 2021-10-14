import { useEffect, useState } from 'react';
import { Service } from '../Service';
import { Product } from '../models/Product';

const ListProducts = () => {
  const service: Service = new Service();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function get() {
      const cat = await service.getProducts();
      setProducts(cat);
    }
    get();
  }, []);

  return products;
};

export default ListProducts;