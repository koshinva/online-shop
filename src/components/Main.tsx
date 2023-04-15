import { FC } from 'react';

import Products from './Products/Products';
import Filters from './Filters/Filters';

const Main: FC = () => {
  return (
    <section className="flex flex-col justify-between md:flex-row">
      <Filters />
      <Products />
    </section>
  );
};

export default Main;
