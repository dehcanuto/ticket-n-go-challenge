import { CartItem } from "..";
import { CartContextType } from "@/context/cart/types";

const CartNavigation = ({ cart, dispatch }: CartContextType) => {
    return (
        <div className="flex flex-col -my-3 gap-2">
            <div className="flex items-center justify-between text-sm">
                <h3>Items ({cart.length})</h3>
                <button
                    onClick={() => dispatch({ type: 'CLEAR_CART', payload: [] })}
                    className="text-xs text-slate-300">
                        Limpar
                </button>
            </div>
            <ul role="list" className="divide-y divide-slate-500">
                {cart.map((item, key) => 
                    <li key={key}>
                        <CartItem {...item}/>
                    </li>)}
            </ul>
        </div>
    )
}

export default CartNavigation;