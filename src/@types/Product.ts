export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  formatedPrice: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}
