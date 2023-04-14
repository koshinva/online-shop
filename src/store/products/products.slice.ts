import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from './products.types';
import { brands } from 'assets/brands';
import { products } from 'assets/products';

const getBrands = () => {
  return brands.map((brand) => ({ ...brand, checked: false }));
};

const initialState: IInitialState = {
  brands: getBrands(),
  products: products,
  checkedIdBrands: [],
  productsPerPage: 6,
  moreButtonActivity: 6 < products.length,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleCheckedBrand(state, action: PayloadAction<number>) {
      state.brands = state.brands.map((brand) =>
        brand.id === action.payload ? { ...brand, checked: !brand.checked } : brand
      );
      const isExist = state.checkedIdBrands.find((id) => id === action.payload);
      if (isExist) {
        state.checkedIdBrands = state.checkedIdBrands.filter((id) => id !== action.payload);
      } else {
        state.checkedIdBrands.push(action.payload);
      }
    },
    filterProductsByBrands(state) {
      state.products = state.products.filter((product) =>
        state.checkedIdBrands.includes(product.brand)
      );
    },
    resetFiltersByBrands(state) {
      state.checkedIdBrands = [];
      state.brands = getBrands();
      state.products = products;
    },
    increaseProductsPerPage(state) {
      state.productsPerPage += 3;
      state.moreButtonActivity = state.productsPerPage < state.products.length;
    }
  },
});
