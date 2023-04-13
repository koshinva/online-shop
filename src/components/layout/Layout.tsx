import { FC } from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';

import './Layout.css';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
