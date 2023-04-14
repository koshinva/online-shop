import { FC } from 'react';

import './Popup.css';
import Icon from 'ui/Icon';
import { useTypedSelector } from 'hooks/useTypedSelector';

const SuccessPopup: FC = () => {
  const { isOpenedPopup } = useTypedSelector((state) => state.cart);
  if (!isOpenedPopup) return null;
  return (
    <div className="popup_success">
      <p>Заказ успешно оформлен</p>
      <button className="popup_success__button" type="button">
        <Icon name="AiOutlineClose" />
      </button>
    </div>
  );
};

export default SuccessPopup;
