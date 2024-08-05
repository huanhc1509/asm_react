export interface IProduct {
    id: number | string;
    categoryId: number;
    name: string;
    description: string;
    price: number;
    oldPrice: number;
    images: string[];
    rating: number;
    quantity: number;
  }