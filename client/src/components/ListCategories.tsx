import { useEffect, useState } from 'react';
import { Service } from '../Service';
import { Category } from '../models/Category';

const ListCategories = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const service: Service = new Service();
    async function get() {
      const cat = await service.getCategories();
      setCategories(cat);
    }
    get();
  }, []);

  return categories;
};

export default ListCategories;

