import { FC } from 'react';
import FieldFilter from './FieldFilter';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import Button from 'components/ui/Button';

const FormFilters: FC = () => {
  const { toggleCheckedBrand, filterProductsByBrands } = useActions();
  const { brands } = useTypedSelector((state) => state.products);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterProductsByBrands();
  };

  return (
    <form className="form-filters" onSubmit={handleSubmit}>
      {brands.map((brand) => (
        <FieldFilter
          key={brand.id}
          brand={brand}
          handleChange={() => toggleCheckedBrand(brand.id)}
        />
      ))}
      <Button type="submit" className="mt-7">
        Применить
      </Button>
    </form>
  );
};

export default FormFilters;
