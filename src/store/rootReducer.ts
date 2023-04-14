import { cartSlice } from './cart/cart.slice';
import { productsSlice } from './products/products.slice';

export const reducers = {
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
};
