import { FC } from 'react';

import './Filters.css';
import FormFilters from './FormFilters';

const Filters: FC = () => {
  return <div className="filters">
    <h2 className='filters__title'>Бренды</h2>
    <FormFilters />
  </div>;
};

export default Filters;
