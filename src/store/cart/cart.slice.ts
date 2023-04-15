import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddToCart, IChangeQuantity, IInitialState } from './cart.types';
import { sendOrder } from './cart.action';

const initialState: IInitialState = {
  cartList: [],
  totalAmount: 0,
  isOpenedPopup: false,
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
    changeQuantity(state, { payload }: PayloadAction<IChangeQuantity>) {
      const cartItem = state.cartList.find((cartItem) => cartItem.product.id === payload.productId);
      if (!cartItem || (cartItem.quantity === 1 && payload.type === 'minus')) return;
      cartItem.quantity = payload.type === 'minus' ? cartItem.quantity - 1 : cartItem.quantity + 1;
      cartItem.price = cartItem.product.regular_price.value * cartItem.quantity;
    },
    calculateTotalAmount(state) {
      state.totalAmount = state.cartList.reduce((acc, cartItem) => acc + cartItem.price, 0);
    },
    closePopupAndClearCart(state) {
      state.isOpenedPopup = false;
      state.cartList = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sendOrder.fulfilled, (state) => {
      state.isOpenedPopup = true;
    });
  },
});
