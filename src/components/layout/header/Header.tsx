import { FC } from 'react';
import Logo from './Logo';
import CartLink from './CartLink';

import './Header.css';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <CartLink />
      </div>
    </header>
  );
};

export default Header;
