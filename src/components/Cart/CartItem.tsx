import { FC } from 'react';
import { ICartItem } from 'types/cart.iterface';
import Icon from 'ui/Icon';

const CartItem: FC<{ cartItem: ICartItem }> = ({ cartItem }) => {
  return (
    <li className="cart-item">
      <div>
        <img
          src={cartItem.product.image}
          alt={cartItem.product.title}
          className="cart-item__image"
        />
        <h3 className="cart-item__title">{cartItem.product.title}</h3>
      </div>
      <div className="cart-item__quantity">
        <button className="cart-item__button" type="button">
          <Icon name="AiOutlinePlusCircle" />
        </button>
        <span className="cart-item__quantity-item">{cartItem.quantity}</span>
        <button className="cart-item__button" type="button">
          <Icon name="AiOutlineMinusCircle" />
        </button>
      </div>
      <p className="cart-item__price">
        {cartItem.price} <span>{cartItem.product.regular_price.currency}</span>{' '}
      </p>
      <button className="cart-item__button cart-item__button_delete" type="button">
        <Icon name="AiOutlineDelete" />
      </button>
    </li>
  );
};

export default CartItem;
