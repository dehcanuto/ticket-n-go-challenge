"use client"

import { createContext, ReactElement, useState } from 'react'
import { CartContextTypes, CartPropTypes } from './types'

export const CartContext = createContext<CartContextTypes>({
  open: false,
  setOpenState: () => {},
})

export const CartContextComponent = ({
  children,
}: CartPropTypes): ReactElement => {
  const [open, setOpen] = useState(false);

  const setOpenState = (value: boolean) => {
    setOpen(value)
  }

  return (
    <CartContext.Provider value={{ open, setOpenState }}>
      {children}
    </CartContext.Provider>
  )
}
