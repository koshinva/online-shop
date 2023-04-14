import { FC } from 'react';
import Icon from 'ui/Icon';

const Logo: FC = () => {
  return (
    <div className="logo">
      <Icon className="fill-sky-900 text-4xl mr-2" name="AiOutlineShopping" />
      <h1 className="logo__title">online-shop</h1>
    </div>
  );
};

export default Logo;
