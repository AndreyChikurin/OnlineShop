import { useEffect, useState } from 'react';
import { Service } from '../Service';
import { Category } from '../models/Category';

const ListCategories = () => {
  const service: Service = new Service();

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function get() {
      const cat = await service.getCategories();
      setCategories(cat);
    }
    get();
  }, []);

  return categories;
};

export default ListCategories;

