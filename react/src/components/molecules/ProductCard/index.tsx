import Image from "next/image";
import Link from "next/link";
import { ProductPropType } from "@/types/Product";
import { moneyFormatter } from "@/helpers";
import { Rating } from "@/components/atoms";
import { ButtonAddCart } from "..";

const ProductCard = (product: ProductPropType) => {
    const { id, title, image, price, category, rating } = product

    return (
        <Link href={`/products/${id}`} className="group relative h-fit bg-slate-700 rounded-lg overflow-hidden">
            <div className="aspect-h-1 aspect-w-1 w-full h-full h-80 overflow-hidden bg-white lg:aspect-none group-hover:opacity-75">
                <Image
                    src={image}
                    alt={title}
                    width={296}
                    height={320}
                    className="h-auto w-auto object-contain object-center lg:h-full lg:w-full"
                    priority
                />
            </div>
            <div className="flex flex-col justify-between p-4">
                <div className="flex flex-col w-full">
                    <h3 className="text-sm text-white mb-2">
                        {title}
                    </h3>
                    <Rating {...rating} />
                    <div className="flex flex-row items-center justify-between">
                        <p className="mt-2 px-2 text-xs text-gray-300 border border-gray-500 rounded-sm">
                            {category}
                        </p>
                    </div>
                </div>
                <p className="flex my-3 text-2xl font-semibold text-blue-500">
                    {moneyFormatter(price)}
                </p>
                <ButtonAddCart {...product} />
            </div>
        </Link>
    )
}

export default ProductCard;