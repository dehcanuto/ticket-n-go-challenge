"use client"

import { useState } from "react";
import { ActionLinks } from "@/components/atoms";
import { MobileNavigation, SlideOver } from "@/components/molecules";

const MenuMobile = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <ActionLinks style="xl:hidden" icon="FiMenu" action={() => setOpen(true)} />
            {open && (
                <SlideOver title="Menu" orientation="left" action={() => setOpen(false)}>
                    <MobileNavigation closeMenu={() => setOpen(false)} />
                </SlideOver>
            )}
        </div>
    )
}

export default MenuMobile;