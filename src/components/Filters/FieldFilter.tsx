import { FC } from 'react';
import { IFilterData } from './filter.interface';
import Icon from 'ui/Icon';

interface IFieldFilterProps {
  filter: IFilterData;
  handleClick: (id: number) => void;
}

const FieldFilter: FC<IFieldFilterProps> = ({ filter, handleClick }) => {
  return (
    <label className="field">
      <input
        className="field__real-checkbox"
        type="checkbox"
        checked={filter.checked}
        onClick={() => handleClick(filter.id)}
        name={filter.code}
      />
      <span className="field__custom-checkbox">
        <Icon name="AiOutlineCheck" />
      </span>
      {filter.title}
    </label>
  );
};

export default FieldFilter;
