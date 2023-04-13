import { FC } from 'react';
import { IBrandData } from '../../types/brand.interface';
import Icon from 'ui/Icon';

interface IFieldFilterProps {
  brand: IBrandData;
  handleChange: () => void;
}

const FieldFilter: FC<IFieldFilterProps> = ({ brand, handleChange }) => {
  return (
    <label className="field">
      <input
        className="field__real-checkbox"
        type="checkbox"
        checked={brand.checked}
        onChange={handleChange}
        name={brand.code}
      />
      <span className="field__custom-checkbox">
        <Icon name="AiOutlineCheck" />
      </span>
      {brand.title}
    </label>
  );
};

export default FieldFilter;
