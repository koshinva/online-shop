interface IRegularPrice {
  currency: string;
  value: number;
}

export interface IProductData {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: IRegularPrice;
  image: string;
  brand: number;
}
