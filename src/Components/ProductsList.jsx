import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../requests/products";
import Card from "./Card";

const ProductList = () => {
    const { data: products, isLoading } = useQuery({
        queryFn: () => fetchProducts(),
        queryKey: ["products"]
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="m-auto">
            <div className="grid mx-8 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 items-center justify-center p-2">
                {products.map((product, index) => (
                    <div key={index} className="flex justify-center">
                        <Card item={product} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
