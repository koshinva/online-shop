import { FC } from 'react';
import FieldFilter from './FieldFilter';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';

const FormFilters: FC = () => {
  const { toggleCheckedBrand } = useActions();
  const { brands } = useTypedSelector((state) => state.products);

  return (
    <form className="form-filters">
      {brands.map((brand) => (
        <FieldFilter
          key={brand.id}
          brand={brand}
          handleClick={() => toggleCheckedBrand(brand.id)}
        />
      ))}
    </form>
  );
};

export default FormFilters;
