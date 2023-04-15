import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'ui/Icon';

const Logo: FC = () => {
  return (
    <div className="logo">
      <Link className="logo__link" to="/">
        <Icon className="fill-sky-900 text-4xl mr-2" name="AiOutlineShopping" />
        <h1 className="logo__title">online-shop</h1>
      </Link>
    </div>
  );
};

export default Logo;
