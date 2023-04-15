import { FC, ButtonHTMLAttributes } from 'react';
import Icon from 'ui/Icon';

interface IPopupCloseButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PopupCloseButton: FC<IPopupCloseButton> = ({ type = 'button', ...rest }) => {
  return (
    <button type={type} {...rest} className="popup__close-button">
      <Icon name="AiOutlineClose" />
    </button>
  );
};

export default PopupCloseButton;
