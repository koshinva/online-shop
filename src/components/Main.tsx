import { FC } from 'react';

import Products from './Products/Products';
import Filters from './Filters/Filters';

const Main: FC = () => {
  return (
    <section className="h-screen flex justify-between">
      <Filters />
      <Products />
    </section>
  );
};

export default Main;
