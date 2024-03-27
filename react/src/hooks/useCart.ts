import { useContext } from 'react';
import { CartContext } from '@/context/cart/context';
import { CartContextType } from '@/context/cart/types';

const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('O Context está nulo');
  }
  return context;
};

export default useCart;
