"use client"

import { ReactNode } from 'react';
import { SidebarContextComponent } from './sidebar/context';
import { CartContextComponent } from './cart/context';

const SessionRoot = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <CartContextComponent>
            <SidebarContextComponent>
                {children}
            </SidebarContextComponent>
        </CartContextComponent>
    )
}

export default SessionRoot;