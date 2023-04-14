import { IProductData } from "./product.interface";

export interface ICartItem {
  product: IProductData;
  quantity: number;
  price: number;
}
