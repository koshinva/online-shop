import { FC } from 'react';
import FieldFilter from './FieldFilter';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import Button from 'components/ui/Button';
import Icon from 'ui/Icon';

const FormFilters: FC = () => {
  const { toggleCheckedBrand, filterProductsByBrands, resetFiltersByBrands } = useActions();
  const { brands } = useTypedSelector((state) => state.products);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterProductsByBrands();
  };
  const handleClickReset = () => {
    resetFiltersByBrands();
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
      <Button type="submit" className="mt-7 mb-4">
        Применить
      </Button>
      <button
        className="form-filters__button-reset"
        type="button"
        onClick={() => handleClickReset()}
      >
        <Icon name="AiOutlineClose" /> Сбросить
      </button>
    </form>
  );
};

export default FormFilters;
