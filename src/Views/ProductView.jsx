import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { imgData } from "../Data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import { ChevronLeft, ChevronRight } from "react-feather";
import { useUtility } from "../Hooks/UtilityProvider";
import { useQuery } from "@tanstack/react-query";

import { Navigationbar } from "../Components/Navigationbar";
import { CategoryPanel } from "../Components/CategoryPanel";
import Announcement from "../Components/Announcement"
import ProductSlider from "../Components/ProductSlider";
import { fetchProductById } from "../requests/products";

function LightBox({ products, slideIndex, nextSlide, previousSlide, setShowLightbox }) {


    return (
        <div>
            <article className=" bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
                <button onClick={() => setShowLightbox(false)}>
                    <FontAwesomeIcon icon={faX} className="absolute top-10 right-10" />
                </button>
                <div className="flex items-center justify-center h-screen ">

                    {products.map((item, index) => (
                        <div
                            key={index}
                            className={slideIndex === index + 1 ? "relative" : "hidden"}
                        >
                            <img src={item.mainImage} alt="" className="big-image lg:w-full rounded-md" />

                            <ul className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none ">
                                <li className="pointer-events-auto">
                                    <button onClick={previousSlide} className=" bg-transparent rounded-full p-3 shadow">
                                        <ChevronLeft />
                                    </button>
                                </li>
                                <li className="pointer-events-auto">
                                    <button onClick={nextSlide} className=" bg-transparent rounded-full p-3 shadow">
                                        <ChevronRight />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}


function ProductView() {
    const { id } = useParams();
    console.log("id",id);
    

    const [products] = useState(imgData)
    const [value, setValue] = useState(0)
    const [amount, setAmount] = useState(0)
    const [slideIndex, setSlideIndex] = useState(1)
    const [showLightbox, setShowLightbox] = useState(false)
    const { isSmall } = useUtility()

    const { mainImage } = products[value]
    const recentProducts = JSON.parse(localStorage.getItem("recentProducts")) || [];

    const nextSlide = () => {
        if (slideIndex !== products.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === products.length) {
            setSlideIndex(1)
        }
    }

    const previousSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(products.length)
        }
    }

    const handleMinus = () => {
        setAmount(amount - 1)
        if (amount <= 0) setAmount(0);
    };


    //Data retrieval func
    const { data: product, isLoading } = useQuery({
        queryFn: () => fetchProductById(id),
        queryKey: ["product"]
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    console.log(product);
    //data thiyenne product eke eg: name -> product.name

    return (
        <div>
            <Announcement />
            <Navigationbar />
            <CategoryPanel />
            <div className="text-center mx-8">
                {showLightbox && <LightBox products={products} slideIndex={slideIndex} nextSlide={nextSlide} previousSlide={previousSlide} setShowLightbox={setShowLightbox} />}
                <section className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mt-10 bprder-b ">
                    <article>
                        <div className="lg:hidden">
                            {products.map((item, index) => (
                                <div
                                    key={index}
                                    className={slideIndex === index + 1 ? "relative" : "hidden"}>
                                    <img src={item.mainImage} alt="" className="w-full rounded-md cursor-pointer" onClick={() => setShowLightbox(true)} />

                                    <ul className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none lg:hidden">
                                        <li className="pointer-events-auto">
                                            <button onClick={previousSlide} className=" bg-transparent rounded-full p-3 shadow">
                                                <ChevronLeft />
                                            </button>
                                        </li>
                                        <li className="pointer-events-auto">
                                            <button onClick={nextSlide} className=" bg-transparent rounded-full p-3 shadow">
                                                <ChevronRight />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="hidden lg:block">
                            <img src={mainImage} alt="" className="w-full rounded-md cursor-pointer" onClick={() => setShowLightbox(true)} />
                        </div>



                        <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
                            {products.map((item, index) => (

                                <li key={item.id}
                                    onClick={() => setValue(index)}
                                    className={
                                        `${index === value && "border-2 border-red-600 opacity-80"} 
                                        border-2  rounded-md overflow-hidden cursor-pointer`
                                    }>
                                    <img src={item.thumbnail} alt="" className="w-20 rounded-md" />
                                </li>

                            ))}
                        </ul>
                    </article>

                    <article className="px-8 pb-10">
                        <h2 className="  py-1 px-2 text-Red1 uppercase tracking-wide text-md font-bold inline-block  ">NIKE Sneaker</h2>
                        <h1 className=" mb-10 px-2 font-bold text-3xl lg:text-4xl">NIKE pegasus 40<br /> Men's Road Running Shoes</h1>

                        <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2 px-2">
                            <ul className="flex items-center gap-5">
                                <li className="font-bold text-2xl">$125.00</li>
                                <li className=" bg-blue-gray-50 py-1 px-2 text-Red1 uppercase tracking-wide text-sm font-bold inline-block rounded shadow-sm">50%</li>
                            </ul>
                            <p className="text-sm "><s>$250.00</s></p>
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

                <p className="mb-10 px-2 leading-relaxed max-w-screen-2xl mx-auto mt-10">A springy ride for any run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you’re logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it’s still the established road runner you can put your faith in, day after day, run after run.</p>
                <hr className="my-10 ml-8" />

                <div className="my-8 items-center justify-center text-left mx-8">
                    <div className="ml-8 mt-16 mb-6 relative">
                        <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                        <h2 className="text-2xl font-bold relative pl-4 text-gray-800">Recently Viewed Products</h2>
                        <div className="w-2/6">
                            <hr className="border-gray-300 my-2" />
                        </div>
                    </div>
                    <div className="ml-9 mt-12">
                        <ProductSlider data={recentProducts} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductView