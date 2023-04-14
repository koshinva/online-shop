import { IProductData } from 'types/product.interface';

interface ICartItem {
  product: IProductData;
  quantity: number;
  price: number;
}

export interface IInitialState {
  cartList: ICartItem[];
  totalAmount: number;
}
export interface IAddToCart {
  product: IProductData;
  quantity?: number;
}
