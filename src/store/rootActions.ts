import { cartSlice } from './cart/cart.slice';
import { productsSlice } from './products/products.slice';

export const rootActions = { ...productsSlice.actions, ...cartSlice.actions };
