import { FC } from 'react';

import './Cart.css';
import CartList from './CartList';
import TotalAmount from './TotalAmount';
import CartForm from './CartForm';

const Cart: FC = () => {
  return (
    <section className="cart">
      <CartList />
      <TotalAmount />
      <CartForm />
    </section>
  );
};

export default Cart;
