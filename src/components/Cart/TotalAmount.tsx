import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC, useEffect } from 'react';
import { convertPrice } from 'utils/convertPrice';

const TotalAmount: FC = () => {
  const { totalAmount, cartList } = useTypedSelector((state) => state.cart);
  const { calculateTotalAmount } = useActions();

  useEffect(() => {
    calculateTotalAmount();
  }, [calculateTotalAmount, cartList]);

  return (
    <div className="total-amount">
      <p className="total-amount__title">Итого:</p>
      <p className="total-amount__price">{convertPrice(totalAmount)}</p>
    </div>
  );
};

export default TotalAmount;
