import { FC, ButtonHTMLAttributes } from 'react';

import './Button.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
