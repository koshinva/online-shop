import { FC, FormEvent, useState, ChangeEvent } from 'react';
import { useActions } from 'hooks/useActions';
import Button from 'ui/button/Button';

interface IFields {
  user: string;
  phone: string;
}

const CartForm: FC = () => {
  const { sendOrder } = useActions();
  const [fields, setFields] = useState<IFields>({ user: '', phone: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { user, phone } = fields;
    sendOrder({ user, phone });
    setFields({ user: '', phone: '' });
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
        Оформить заказ
      </Button>
    </form>
  );
};

export default CartForm;
