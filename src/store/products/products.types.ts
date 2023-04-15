import { IBrandData } from "types/brand.interface";
import { IProductData } from "types/product.interface";

export interface IInitialState {
  brands: IBrandData[];
  checkedIdBrands: number[];
  products: IProductData[];
  productsPerPage: number;
  moreButtonActivity: boolean;
  productInPopup: null | IProductData;
}