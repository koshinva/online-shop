import { cartSlice } from './cart/cart.slice';
import { productsSlice } from './products/products.slice';
import { sendOrder } from './cart/cart.action';

export const rootActions = { ...productsSlice.actions, ...cartSlice.actions, sendOrder };
