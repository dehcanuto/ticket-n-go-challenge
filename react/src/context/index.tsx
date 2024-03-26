"use client"

import { ReactNode } from 'react';
import { SidebarContextComponent } from './sidebar/context';

const SessionRoot = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <SidebarContextComponent>
            {children}
        </SidebarContextComponent>
    )
}

export default SessionRoot;