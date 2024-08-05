import { IProduct } from "./Product";

export interface ICart {
  id?: number | string;
  product: IProduct;
  quantity: number;
}
