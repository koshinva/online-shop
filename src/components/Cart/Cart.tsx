import { FC } from 'react';

import './Cart.css';
import CartList from './CartList';
import TotalAmount from './TotalAmount';
import CartForm from './CartForm';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Cart: FC = () => {
  const { cartList } = useTypedSelector((state) => state.cart);
  return (
    <section className="cart">
      {cartList.length ? (
        <>
          <CartList />
          <TotalAmount />
          <CartForm />
        </>
      ) : (
        <div className="cart__title-empty">В корзине нет товаров</div>
      )}
    </section>
  );
};

export default Cart;
