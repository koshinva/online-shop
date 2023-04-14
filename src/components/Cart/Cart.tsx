import { FC } from 'react';

import CartList from './CartList';
import TotalAmount from './TotalAmount';
import { useTypedSelector } from 'hooks/useTypedSelector';
import CartForm from './CartForm';

import './Cart.css';

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
