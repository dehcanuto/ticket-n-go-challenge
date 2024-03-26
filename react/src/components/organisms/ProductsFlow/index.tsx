"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductsFlowPropsType } from "./types";
import { ProductPropType } from "@/types/Product";
import api from "@/services/api";
import { ProductCard } from "@/components/molecules";

const ProductsFlow = ({ title, url, limit = 0, notMore = false }: ProductsFlowPropsType) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<ProductPropType[]>([]);

    useEffect(() => {
        async function getFlow() {
            const { data } = await api.get(
                url, { params: { limit: limit } }
            );
            setProducts(data);
            setLoading(false);
        }
        getFlow();
    }, [limit, url]);

    return (
        <section className="flex flex-col w-full gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
                {!notMore && <Link href={{ pathname: url }} className="text-blue-500">Ver Mais</Link>}
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {!loading ? 
                    products.length ? 
                        products?.map((item: ProductPropType, key) => 
                            <ProductCard key={key} {...item} />) :
                        'Sem resultados.' : 
                    'Carregando'}
            </div>
        </section>
    )
}

export default ProductsFlow;