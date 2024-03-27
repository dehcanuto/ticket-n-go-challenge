import Image from "next/image";
import Link from "next/link";
import { ProductPropType } from "@/types/Product";
import { moneyFormatter } from "@/helpers";
import { Rating } from "@/components/atoms";
import { ButtonAddCart } from "..";
import { IoStar } from "react-icons/io5";

const SkeletonProductCard = () => {
    return (
        <div className="group animate-pulse relative h-fit bg-slate-700 rounded-lg overflow-hidden">
            <span className="flex w-full h-80 overflow-hidden bg-slate-500" />
            <div className="flex flex-col justify-between p-4">
                <div className="flex flex-col w-full mb-3">
                    <span className="w-56 h-4 bg-slate-500 mb-2 rounded" />
                    <span className="w-36 h-4 bg-slate-500 mb-2 rounded" />
                    <div className="flex mt-1 text-slate-500 gap-2">
                        {[1, 2, 3, 4, 5].map((_, index) => <IoStar key={index} />)}
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="mt-2 w-24 h-4 px-2 text-xs text-gray-300 border border-gray-500 rounded-sm" />
                    </div>
                </div>
                <span className="flex my-3 w-24 h-6 bg-blue-500 rounded" />
                <span className="flex w-full h-10 bg-indigo-600 rounded" />
            </div>
        </div>
    )
}

const ProductCard = (product: ProductPropType) => {
    const { id, title, image, price, category, rating } = product

    return (
        <div className="group relative h-fit bg-slate-700 rounded-lg overflow-hidden">
            <Link href={`/products/${id}`}>
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
            </Link>
            <div className="flex flex-col justify-between p-4">
                <Link href={`/products/${id}`}>
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
                </Link>
                <ButtonAddCart {...product} />
            </div>
        </div>
    )
}

export { SkeletonProductCard, ProductCard };