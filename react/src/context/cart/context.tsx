"use client"

import { createContext, ReactElement, useReducer } from 'react'
import { CartAction, CartContextType, CartPropTypes } from './types'
import { ProductPropType } from '@/types/Product';

const CartContext = createContext<CartContextType|null>(null);

// Função para adicionar itens ao carrinho
const addToCart = (cart: ProductPropType[], item: ProductPropType): ProductPropType[] => {
  return [...cart, item];
};

// Função para remover itens do carrinho
const removeFromCart = (cart: ProductPropType[], index: number): ProductPropType[] => {
  const updatedCart = [...cart];
  updatedCart.splice(index, 1);
  return updatedCart;
};

// Reducer para gerenciar o carrinho
const cartReducer = (state: ProductPropType[], action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action.payload);
    case 'REMOVE_FROM_CART':
      return removeFromCart(state, action.payload);
    case 'CLEAR_CART':
        return [];
    default:
      return state;
  }
}

const CartContextComponent = ({ children }: CartPropTypes): ReactElement => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextComponent };