import { brands } from 'assets/brands';
import { FC, useState } from 'react';
import { IFilterData } from './filter.interface';
import FieldFilter from './FieldFilter';

const FormFilters: FC = () => {
  const [filters, setFilters] = useState<IFilterData[]>(
    brands.map((brand) => ({ ...brand, checked: false }))
  );

  const handleClick = (id: number) => {
    setFilters((prev) =>
      prev.map((filter) => (filter.id === id ? { ...filter, checked: !filter.checked } : filter))
    );
  };

  return (
    <form className="form-filters">
      {filters.map((filter) => (
        <FieldFilter key={filter.id} filter={filter} handleClick={handleClick} />
      ))}
    </form>
  );
};

export default FormFilters;
