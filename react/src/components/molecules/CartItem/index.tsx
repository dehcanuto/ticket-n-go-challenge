import Image from "next/image";
import { ProductPropType } from "@/types/Product";
import { moneyFormatter } from "@/helpers";
import useCart from "@/hooks/useCart";

const CartItem = (product: ProductPropType) => {
    const { title, price, category, image } = product
    const { dispatch } = useCart()
    
    return (
        <div className="flex p-3 bg-slate-600 py-4 rounded">
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                <Image
                    src={image}
                    alt={title}
                    width={64}
                    height={64}
                    className="w-full h-full overflow-hidden object-contain object-center"
                    priority
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-sm font-medium text-white">
                        <h3 className="">
                            {title}
                        </h3>
                        <p className="ml-4 text-blue-300">
                            {moneyFormatter(price)}
                        </p>
                    </div>
                    <p className="text-sm text-gray-300">
                        {category}
                    </p>
                </div>
                <div className="flex flex-1 items-end justify-between text-xs">
                    <p className="text-slate-400">Qnt. 1</p>
                    <div className="flex">
                        <button
                            type="button"
                            onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}
                            className="font-medium text-red-500">
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;