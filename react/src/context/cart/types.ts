import { ProductPropType } from '@/types/Product'
import { ReactNode } from 'react'

export interface CartAction {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'CLEAR_CART'
  payload: ProductPropType | number | any
}

export interface CartPropTypes {
  children: ReactNode
}

export interface CartContextType {
  cart: ProductPropType[]
  dispatch: React.Dispatch<CartAction>
}