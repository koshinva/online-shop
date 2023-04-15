import { FC } from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';

import './Layout.css';
import SuccessPopup from 'ui/popup/SuccessPopup';
import PopupProduct from 'ui/popup/PopupProduct';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <SuccessPopup />
      <PopupProduct />
    </>
  );
};

export default Layout;
