import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddToCart, IInitialState } from './cart.types';

const initialState: IInitialState = {
  cartList: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductInCart(state, { payload }: PayloadAction<IAddToCart>) {
      const isExist = state.cartList.find((cartItem) => cartItem.product.id === payload.product.id);
      if (!isExist) {
        const quantity = payload.quantity || 1;
        const price = payload.product.regular_price.value * quantity;
        state.cartList.push({ product: payload.product, quantity, price });
      } else {
        return;
      }
    },
    removeProductFromCart(state, { payload }: PayloadAction<{ productId: number }>) {
      state.cartList = state.cartList.filter(
        (cartItem) => cartItem.product.id !== payload.productId
      );
    },
  },
});
