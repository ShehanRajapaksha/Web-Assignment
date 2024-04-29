import React from "react";
import { data } from "../Data/data";
import Card from "./Card";
// import { useQuery } from "@tanstack/react-query";
// // import { fetchProducts } from "../requests/products";

const ProductList = () => {
    const [items, setdata] = React.useState(data);
    // const {data:products,isLoading,}=useQuery({
    //     queryFn: ()=> fetchProducts(),
    //     queryKey:["products"]

    // })

    // console.log(products);
    //Used for axios: TODO : complete axios files

    return (
        <div>
            <div className="m-auto">
                <div className="grid mx-8 xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-4 items-center justify-center p-2">
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-center ">
                            <Card item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
