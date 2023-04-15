import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { IProductData } from 'types/product.interface';
import Icon from 'ui/Icon';
import Button from 'ui/button/Button';

interface IProductItem {
  product: IProductData;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const { addProductInCart, removeProductFromCart, selectProductInPopup } = useActions();
  const { cartList } = useTypedSelector((state) => state.cart);

  const isExistInCart = cartList.find((cartItem) => cartItem.product.id === product.id);

  const handleClick = () => {
    return isExistInCart
      ? removeProductFromCart({ productId: product.id })
      : addProductInCart({ product });
  };

  return (
    <div className="product-item">
      <div className="product-item__top-level">
        <img
          src={process.env.PUBLIC_URL + product.image}
          alt={product.title}
          className="product-item__image"
        />
        <button className="product-item__button" type="button" onClick={() => handleClick()}>
          {isExistInCart ? <Icon name="BsCartDashFill" /> : <Icon name="BsCartPlus" />}
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
      <Button
        className="mt-3"
        typeButton="outline"
        onClick={() => selectProductInPopup({ productId: product.id })}
      >
        Подробнее
      </Button>
    </div>
  );
};

export default ProductItem;
