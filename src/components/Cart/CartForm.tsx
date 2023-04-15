import { FC, FormEvent, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import Button from 'ui/button/Button';


interface IFields {
  user: string;
  phone: string;
}

const CartForm: FC = () => {
  const { sendOrder, closePopup } = useActions();
  const navigate = useNavigate();
  const [fields, setFields] = useState<IFields>({ user: '', phone: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { user, phone } = fields;
    sendOrder({ user, phone });
    setFields({ user: '', phone: '' });
    navigate('/');
    setTimeout(() => {
      closePopup();
    }, 3000);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <form className="cart-form" onSubmit={handleSubmit}>
      <h2 className="cart-form__title">Укажите данные для заказа</h2>
      <input
        className="cart-form__input"
        type="text"
        name="user"
        id="user"
        placeholder="Введите имя..."
        required
        autoComplete="off"
        value={fields.user}
        onChange={handleChange}
      />
      <input
        className="cart-form__input"
        type="text"
        name="phone"
        id="phone"
        placeholder="Введите телефон..."
        required
        autoComplete="off"
        value={fields.phone}
        onChange={handleChange}
      />
      <Button type="submit" className="mt-4">
        Отправить
      </Button>
    </form>
  );
};

export default CartForm;
