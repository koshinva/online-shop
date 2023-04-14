import { createAsyncThunk } from '@reduxjs/toolkit';

interface INamePhone {
  user: string;
  phone: string;
}

export const sendOrder = createAsyncThunk<Promise<any>, INamePhone>(
  'order',
  async ({ user, phone }: INamePhone, { dispatch }) => {
    try {
      const response = await fetch('https://app.aaccent.su/js/confirm.php', {
        method: 'POST',
        body: JSON.stringify({ user, phone }),
      });
      if (!response.ok) {
        throw new Error('Server error');
      }
      const data = await response.json();
      if (data.result !== 'ok') {
        throw new Error('Server error');
      }
      return;
    } catch (error) {
      console.error(error);
    }
  }
);
