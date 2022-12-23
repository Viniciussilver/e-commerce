import { useEffect, useState } from 'react';
import api from '../services/api';

export type ProductTypes = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export const useFetch = () => {
  const [allProducts, setAllProducts] = useState<ProductTypes[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategory = async () => {
      await api
        .get('products/categories')
        .then(res => setCategories(['All', ...res.data]))
        .catch(e => console.log(e));
    };

    const loadProducts = async () => {
      await api
        .get('products')
        .then(res => setAllProducts(res.data))
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    };

    loadCategory();
    loadProducts();
  }, []);

  return { allProducts, categories, loading };
};
