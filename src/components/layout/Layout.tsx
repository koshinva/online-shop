import { FC } from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';

import './Layout.css';
import SuccessPopup from 'ui/popup/SuccessPopup';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <SuccessPopup />
    </>
  );
};

export default Layout;
