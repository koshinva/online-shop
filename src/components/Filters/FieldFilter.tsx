import { FC } from 'react';
import { IBrandData } from '../../types/brand.interface';
import Icon from 'ui/Icon';

interface IFieldFilterProps {
  brand: IBrandData;
  handleClick: () => void;
}

const FieldFilter: FC<IFieldFilterProps> = ({ brand, handleClick }) => {
  return (
    <label className="field">
      <input
        className="field__real-checkbox"
        type="checkbox"
        checked={brand.checked}
        onClick={handleClick}
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
