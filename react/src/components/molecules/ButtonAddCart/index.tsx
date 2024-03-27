import { FiPlus } from "react-icons/fi";
import useCart from "@/hooks/useCart";
import { ProductPropType } from "@/types/Product";

const ButtonAddCart = (product: ProductPropType) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <button type="button" onClick={handleAddToCart} className="flex items-center justify-center px-8 py-3 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 gap-3">
            <FiPlus className="text-xl" />
            Adicionar ao Carrinho
        </button>
    )
}

export default ButtonAddCart;