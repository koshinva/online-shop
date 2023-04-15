import { useEffect } from 'react';

export const usePopup = (isOpened: boolean) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '17px';
    }
    return () => {
      document.body.style.overflow = 'scroll';
      document.body.style.paddingRight = '0';
    };
  }, [isOpened]);
};
