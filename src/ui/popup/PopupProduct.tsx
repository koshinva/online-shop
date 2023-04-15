import { FC } from 'react';

import './Popup.css';
import PopupCloseButton from './PopupCloseButton';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { popupRowTitles } from 'utils/popupRowTitles';
import PopupRow from './PopupRow';
import Button from 'ui/button/Button';
import { Link } from 'react-router-dom';
import { usePopup } from './usePopup';

const PopupProduct: FC = () => {
  const { productInPopup } = useTypedSelector((state) => state.products);
  const { cartList } = useTypedSelector((state) => state.cart);
  const { closeProductPopup, addProductInCart, removeProductFromCart } = useActions();

  usePopup(!!productInPopup);

  if (!productInPopup) return null;

  const displayedData: [string, string][] = Object.entries(productInPopup).filter((elem) =>
    popupRowTitles.includes(elem[0])
  );

  const productExistInCart = cartList.find((cartItem) => cartItem.product.id === productInPopup.id);

  return (
    <div className="popup-product" onClick={() => closeProductPopup()}>
      <div className="popup-product__body" onClick={(event) => event.stopPropagation()}>
        <PopupCloseButton onClick={() => closeProductPopup()} />
        <img
          src={productInPopup.image}
          alt={productInPopup.title}
          className="popup-product__image"
        />
        {displayedData.map(([rowTitle, rowValue], index) => (
          <PopupRow key={`${index}-${rowTitle}`} title={rowTitle} value={rowValue} />
        ))}
        <PopupRow
          title="price"
          value={`${productInPopup.regular_price.value} ${productInPopup.regular_price.currency}`}
        />
        {productExistInCart ? (
          <div className="popup-product__actions">
            <Link className="popup-product__link" to="/cart" onClick={() => closeProductPopup()}>
              Перейти в корзину
            </Link>
            <Button
              className="basis-2/5"
              onClick={() => removeProductFromCart({ productId: productInPopup.id })}
            >
              Удалить
            </Button>
          </div>
        ) : (
          <Button
            className="mt-5"
            typeButton="outline"
            onClick={() => addProductInCart({ product: productInPopup })}
          >
            Добавить в корзину
          </Button>
        )}
      </div>
    </div>
  );
};

export default PopupProduct;
