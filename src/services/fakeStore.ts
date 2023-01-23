import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export default async () => {
  return {
    products: await api.get('products').then(response => response.data),
    categories: await api
      .get('products/categories')
      .then(response => response.data),
  };
};
