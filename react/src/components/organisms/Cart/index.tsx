"use client"

import { useState } from "react";
import useCart from "@/hooks/useCart";
import { ActionLinks } from "@/components/atoms";
import { CartNavigation, SlideOver } from "@/components/molecules";

const Cart = () => {
    const { cart, dispatch } = useCart()
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <ActionLinks icon="FiShoppingCart" action={() => setOpen(true)} notified={!!cart.length} />
            {open && (
                <SlideOver title="Carrinho" orientation="right" action={() => setOpen(false)}>
                    {cart.length ?
                        <CartNavigation cart={cart} dispatch={dispatch} /> : 
                        <span>Sem itens no carrinho.</span>}
                </SlideOver>
            )}
        </div>
    )
}

export default Cart;