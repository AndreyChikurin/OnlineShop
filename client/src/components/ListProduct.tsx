import { useEffect, useState } from 'react';
import { Service } from '../Service';
import { Product } from '../models/Product';
import { useHistory } from 'react-router-dom';

export default function ListProduct() {

    
  const service: Service = new Service();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {async function get() {
        const prod = await service.getProducts();
        setProducts(prod);
  }; get()
});

const history = useHistory()
console.log(history)

  return products;
  
}
