import { FC } from 'react';

import './Popup.css';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import PopupCloseButton from './PopupCloseButton';

const SuccessPopup: FC = () => {
  const { isOpenedPopup } = useTypedSelector((state) => state.cart);
  const { closePopup } = useActions();
  if (!isOpenedPopup) return null;
  return (
    <div className="popup-success">
      <p>Заказ успешно оформлен</p>
      <PopupCloseButton onClick={() => closePopup()} />
    </div>
  );
};

export default SuccessPopup;
