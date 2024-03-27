import { ReactNode } from 'react'

export interface CartPropTypes {
  children: ReactNode
}

export type CartContextTypes = {
  open: boolean
  setOpenState: (value: boolean) => void
}
