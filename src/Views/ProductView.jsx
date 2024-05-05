import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import { ChevronLeft, ChevronRight, Divide } from "react-feather";
import { useUtility } from "../Hooks/UtilityProvider";
import { Navigationbar } from "../Components/Navigationbar";
import { CategoryPanel } from "../Components/CategoryPanel";
import Announcement from "../Components/Announcement"
import { ReadonlyRating } from "../Components/ReadonlyRating";
import ProductList from "../Components/ProductsList";
import ProductSlider from "../Components/ProductSlider";
import Footer from "../Components/Footer";
import Divider from "../Components/Divider";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../requests/products";
import { useParams } from "react-router-dom";


function ProductView() {
    const [value, setValue] = useState(0)
    const [amount, setAmount] = useState(0)
   
    const { isSmall } = useUtility()
    const { id } = useParams();

    const handleMinus = () => {
        setAmount(amount - 1)
        if (amount <= 0) setAmount(0);
    };


    const { data: product, isLoading, isError, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id),
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    if (!product) return <p>No product found.</p>;


    return (
        <div>
            <Announcement />
            <Navigationbar />
            <CategoryPanel />

            <section className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mt-10">
                <article>
                <img src={product.image} alt={product.name} className="w-full rounded-md ml-4" />

                </article>

                <article className="px-8 pb-10">
                    <h2 className="  py-1 px-2 text-Red1 uppercase tracking-wide text-md font-bold inline-block  ">{product.product_id}</h2>
                    <h1 className=" mb-4 px-2 font-bold text-3xl lg:text-4xl">{product.Name}<br /></h1>

                    <span className="flex items-center mt-2 mb-0 px-2">
                        <ReadonlyRating />
                        <span className="text-xs ml-2 text-gray-500">
                            {product.price*3/4}k reviews
                        </span>
                    </span>

                    <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2 px-2">
                        <ul className="flex items-center gap-5">
                            <li className="font-bold text-4xl text-red-600">${product.price}</li>
                            <li className=" bg-blue-gray-50 py-1 px-2 text-Red1 uppercase tracking-wide text-sm font-bold inline-block rounded shadow-sm">{50}%</li>
                        </ul>
                        <p className=" text-lg"><s>${product.price *4}</s></p>
                    </div>
                    <div className="mt-10 lg:flex items-center justify-between gap-2 px-2">
                        <ul className="flex items-center justify-between bg-blue-gray-50 py-2 px-4 rounded shadow-sm lg:flex-1">
                            <li onClick={handleMinus} className=" cursor-pointer"><FontAwesomeIcon icon={faMinus} /></li>
                            <li>{amount}</li>
                            <li onClick={() => setAmount(amount + 1)} className=" cursor-pointer"><FontAwesomeIcon icon={faPlus} /></li>
                        </ul>

                        <div className="lg:flex-1">
                            <Button
                                ripple={true}
                                className="flex items-center justify-center gap-4 bg-red-600 py-3 px-4 text-white font-bold rounded-md shadow mt-5 w-full lg:mt-0 hover:bg-red-500 transition-all duration-200 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faCartShopping} />Add to Cart
                            </Button>
                        </div>
                    </div>
                </article>
            </section>

            <p className="mb-10 px-2 leading-relaxed max-w-screen-2xl mx-auto mt-10 ml-4">{product.description}</p>
            <hr className="my-10 ml-8" />

            <div className="my-8 items-center justify-center text-left mx-4">
                <div className="relative ml-8 mt-16 mb-6">
                    <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                    <h2 className="text-2xl font-bold relative pl-4 text-gray-800">Hot Deals</h2>
                    <div className="w-2/6">
                        <hr className="border-gray-300 my-2" />
                    </div>
                </div>
                <div className="ml-8">
                    <ProductSlider />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ProductView