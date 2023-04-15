import { FC } from 'react';

interface IPopupRow {
  title: string;
  value: string;
}

const PopupRow: FC<IPopupRow> = ({title, value}) => {
  return (
    <div className="popup-row">
      <h3 className="popup-row__title">{title}</h3>
      <p className="popup-row__value">{value}</p>
    </div>
  );
};

export default PopupRow;
