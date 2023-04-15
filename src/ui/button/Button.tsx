import { FC, ButtonHTMLAttributes } from 'react';

import './Button.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'fill' | 'outline';
}

const Button: FC<IButton> = ({ children, className, typeButton = 'fill', ...rest }) => {
  return (
    <button
      {...rest}
      className={`button ${className} ${typeButton === 'fill' ? 'button_fill' : 'button_outline'}`}
    >
      {children}
    </button>
  );
};

export default Button;
