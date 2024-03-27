"use client"

import { ReactNode } from 'react';
import { CartContextComponent } from './cart/context';

const SessionRoot = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <CartContextComponent>
            {children}
        </CartContextComponent>
    )
}

export default SessionRoot;