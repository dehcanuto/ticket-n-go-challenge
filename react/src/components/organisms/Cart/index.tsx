"use client"

import { useState } from "react";
import useCart from "@/hooks/useCart";
import { ActionLinks } from "@/components/atoms";
import { CartItem, SlideOver } from "@/components/molecules";

const CartNavigation = () => {
    const { cart, dispatch } = useCart();
    const [open, setOpen] = useState(false)
    console.log('cart', cart)

    return (
        <div className="relative">
            <ActionLinks icon="FiShoppingCart" action={() => setOpen(true)} notified={!!cart.length} />
            {open && (
                <SlideOver title="Carrinho" orientation="right" action={() => setOpen(false)}>
                    {cart.length ? 
                        <div className="flex flex-col -my-3 gap-2">
                            <div className="flex items-center justify-between text-sm">
                                <h3>Items ({cart.length})</h3>
                                <button onClick={() => dispatch({ type: 'CLEAR_CART', payload: [] })} className="text-xs text-slate-300">Limpar</button>
                            </div>
                            <ul role="list" className="divide-y divide-slate-500">
                                {cart.map((item, key) => 
                                    <li key={key}>
                                        <CartItem {...item}/>
                                    </li>)}
                            </ul>
                        </div> :
                        <span>Sem itens no carrinho.</span>}
                </SlideOver>
            )}
        </div>
    )
}

export default CartNavigation;