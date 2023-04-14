import { FC } from 'react';
import { IProductData } from 'types/product.interface';
import Icon from 'ui/Icon';

interface IProductItem {
  product: IProductData;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  return (
    <div className="product-item">
      <div className="product-item__top-level">
        <img src={product.image} alt={product.title} className="product-item__image" />
        <button className="product-item__button" type="button">
          <Icon name="BsCartPlus" />
        </button>
      </div>
      <div className="product-item__bottom-level">
        <div className="product-item__description">
          <h3 className="product-item__title">{product.title}</h3>
          <p className="product-item__brand">Бренд №{product.brand}</p>
        </div>
        <div className="product-item__price">
          {product.regular_price.value} <span>{product.regular_price.currency}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
