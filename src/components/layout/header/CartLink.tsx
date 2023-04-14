import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'ui/Icon';

const CartLink: FC = () => {
  const { cartList } = useTypedSelector((state) => state.cart);
  return (
    <div className="cart">
      <Link className="cart__link" to="/cart">
        <Icon className="fill-red-950 text-3xl" name="AiOutlineShoppingCart" />
        <span className="cart__quantity" key={cartList.length}>
          {cartList.length}
        </span>
      </Link>
    </div>
  );
};

export default CartLink;
