"use client"

import { useState } from "react";
import { ActionLinks } from "@/components/atoms";
import { SlideOver } from "@/components/molecules";

const CartNavigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <ActionLinks icon="FiShoppingCart" action={() => setOpen(true)} notified />
            {open && (
                <SlideOver title="Carrinho" orientation="right" action={() => setOpen(false)}>
                    <span>carrinho</span>
                </SlideOver>
            )}
        </div>
    )
}

export default CartNavigation;