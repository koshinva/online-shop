import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import PopupCloseButton from './PopupCloseButton';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';

import './Popup.css';
import { usePopup } from './usePopup';

const SuccessPopup: FC = () => {
  const { isOpenedPopup } = useTypedSelector((state) => state.cart);
  const { closePopupAndClearCart } = useActions();
  const navigate = useNavigate();

  const handleClosePopup = () => {
    closePopupAndClearCart();
    navigate('/');
  };

  usePopup(isOpenedPopup);

  if (!isOpenedPopup) return null;

  return (
    <div className="popup-success">
      <div className="popup-success__body">
        <p>Заказ успешно оформлен</p>
        <PopupCloseButton onClick={() => handleClosePopup()} />
      </div>
    </div>
  );
};

export default SuccessPopup;
