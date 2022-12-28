export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity?: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};
