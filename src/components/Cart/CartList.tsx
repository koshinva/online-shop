import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import CartItem from './CartItem';

const CartList: FC = () => {
  const { cartList } = useTypedSelector((state) => state.cart);
  return (
    <ul className="cart-list">
      {cartList.map((cartItem) => (
        <CartItem key={cartItem.product.id} cartItem={cartItem} />
      ))}
    </ul>
  );
};

export default CartList;
