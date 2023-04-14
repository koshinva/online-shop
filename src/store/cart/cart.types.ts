import { ICartItem } from 'types/cart.iterface';
import { IProductData } from 'types/product.interface';

export interface IInitialState {
  cartList: ICartItem[];
  totalAmount: number;
}
export interface IAddToCart {
  product: IProductData;
  quantity?: number;
}
export interface IChangeQuantity {
  productId: number;
  type: 'minus' | 'plus';
}