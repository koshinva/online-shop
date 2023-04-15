import { useActions } from 'hooks/useActions';
import { FC } from 'react';
import { ICartItem } from 'types/cart.iterface';
import Icon from 'ui/Icon';
import { convertPrice } from 'utils/convertPrice';

const CartItem: FC<{ cartItem: ICartItem }> = ({ cartItem }) => {
  const { changeQuantity, removeProductFromCart } = useActions();

  return (
    <li className="cart-item">
      <div>
        <img
          src={process.env.PUBLIC_URL + cartItem.product.image}
          alt={cartItem.product.title}
          className="cart-item__image"
        />
        <h3 className="cart-item__title">{cartItem.product.title}</h3>
      </div>
      <div className="cart-item__quantity">
        <button
          className="cart-item__button"
          type="button"
          onClick={() => changeQuantity({ productId: cartItem.product.id, type: 'plus' })}
        >
          <Icon name="AiOutlinePlusCircle" />
        </button>
        <span className="cart-item__quantity-item">{cartItem.quantity}</span>
        <button
          className={`cart-item__button ${
            cartItem.quantity === 1 ? 'pointer-events-none text-red-400' : ''
          }`}
          type="button"
          onClick={() => changeQuantity({ productId: cartItem.product.id, type: 'minus' })}
          disabled={cartItem.quantity === 1}
        >
          <Icon name="AiOutlineMinusCircle" />
        </button>
      </div>
      <p className="cart-item__price">
        {convertPrice(cartItem.price)} <span>{cartItem.product.regular_price.currency}</span>{' '}
      </p>
      <button
        className="cart-item__button cart-item__button_delete"
        type="button"
        onClick={() => removeProductFromCart({ productId: cartItem.product.id })}
      >
        <Icon name="AiOutlineDelete" />
      </button>
    </li>
  );
};

export default CartItem;
