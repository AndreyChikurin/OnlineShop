import { useEffect, useState } from 'react';
import { Service } from '../Service';
import { Category } from '../models/Category';

export default function ListCategory() {
    
  const service: Service = new Service();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {async function get() {
        const prod = await service.getCategories();
        setCategories(prod);
  }; get()
});


  return (categories.map(value => value.name));
  
}