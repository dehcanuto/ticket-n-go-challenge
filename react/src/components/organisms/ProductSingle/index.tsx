"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

import { moneyFormatter } from "@/helpers";
import api from "@/services/api";
import { ProductPropType } from "@/types/Product";
import { Rating } from "@/components/atoms";
import { ButtonAddCart } from "@/components/molecules";

const ProductSingle = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<ProductPropType>();

    useEffect(() => {
        async function getProduct() {
            const { data } = await api.get(id);
            setProduct(data);
            setLoading(false);
        }
        getProduct();
    }, [id]);

    return (
        <div className="flex items-center max-w-5xl mx-auto">
            {product && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
                    <div className="w-full h-64 lg:h-96">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={296}
                            height={320}
                            className="h-full w-full rounded-md bg-white object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <div className="flex flex-col gap-3">
                            <nav aria-label="Breadcrumb">
                                <ol role="list" className="mx-auto flex w-full max-w-2xl items-center space-x-2">
                                    <li>
                                        <div className="flex items-center">
                                            <a href="#" className="mr-2 capitalize text-sm font-medium text-blue-400">
                                                {product.category}
                                            </a>
                                            <FiChevronRight className="text-slate-500" />
                                        </div>
                                    </li>
                                    <li className="flex w-full max-w-sm text-sm">
                                        <a href="#" aria-current="page" className="font-medium text-gray-400 truncate">
                                            {product.title}
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="text-white uppercase text-2xl">
                                {product.title}
                            </h3>
                            <Rating {...product.rating} />
                            <span className="text-3xl text-blue-500 font-semibold">
                                {moneyFormatter(product.price)}
                            </span>
                        </div>
                        <p className="p-4 text-white bg-slate-700 rounded-lg">
                            {product.description}
                        </p>
                        <div className="flex items-center">
                            <ButtonAddCart {...product} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductSingle;