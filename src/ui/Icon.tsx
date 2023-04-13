import { FC } from 'react';
import { TypeIcon, icons } from 'types/icon.type';

const Icon: FC<{ name: TypeIcon, className?: string }> = ({ name, className }) => {
  const IconComponent = icons[name];
  return <IconComponent className={className} />;
};

export default Icon;
