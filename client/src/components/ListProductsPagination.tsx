import { useEffect, useState } from 'react';
import { Service } from '../Service';
import { Product } from '../models/Product';

const ListProductsPagionation = (quantityPerPage: string, pageNumber: string) => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const service: Service = new Service();
    async function get() {
      const cat = await service.getProductsPagination(quantityPerPage, pageNumber);
      setProducts(cat);
    }
    get();
  }, []);

  return products;
};

export default ListProductsPagionation;