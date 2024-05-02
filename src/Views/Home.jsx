import React from "react";
import Announcement from "../Components/Announcement"
import Carousel from "../Components/Carousel";
import CatSlider from "../Components/CatSlider"
import { Navigationbar } from "../Components/Navigationbar";
import { CategoryPanel } from "../Components/CategoryPanel";
import ProductSlider from "../Components/ProductSlider";
import Divider from "../Components/Divider";
import Banner from "../Components/Banner"
import Footer from "../Components/Footer";
import MobileCarousel from "../Components/MobileCarousel";
import SaleCarousel from "../Components/SaleCarousel";
import { useUtility } from "../Hooks/UtilityProvider";
import EnterEmail from "../Components/EnterEmail";





export default function Home() {
    const { isSmall } = useUtility()

    return (
        <div>
            <div className=" bg-gray-100">
                {/* Announcement Banner */}

                <Announcement />
                <Navigationbar />
                <CategoryPanel />
                {isSmall ? <MobileCarousel autoSlide={true} autoSlideInterval={5000} /> : <Carousel autoSlide={true} autoSlideInterval={5000} />}



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

                <Divider />
                <Banner />
                <Divider />

                {/* Category slider */}
                <div className="ml-8 mt-16 mb-6 relative">
                    <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                    <h2 className="text-2xl font-bold relative pl-4 text-gray-800">Browse By Category</h2>
                    <div className="w-2/6">
                        <hr className="border-gray-300 my-2" />
                    </div>
                </div>
                <div className="ml-4">
                    <CatSlider />
                </div>

                <Divider />

                <SaleCarousel />


                <div className="relative ml-8 mt-16 mb-6">
                    <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                    <h2 className="text-2xl font-bold relative pl-4 text-gray-800">Electronics</h2>
                    <div className="w-2/6">
                        <hr className="border-gray-300 my-2" />
                    </div>
                </div>
                <div className="ml-8">
                    <ProductSlider />
                </div>
                <Divider />

                <div className="relative ml-8 mt-16 mb-6">
                    <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                    <h2 className="text-2xl font-bold relative pl-4 text-gray-800">Furniture</h2>
                    <div className="w-2/6">
                        <hr className="border-gray-300 my-2" />
                    </div>
                </div>
                <div className="ml-8">
                    <ProductSlider />
                </div>
                <Divider />

                <SaleCarousel />

                <div className="relative ml-8 mt-16 mb-8">
                    <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                    <h2 className="text-2xl font-bold relative pl-4 text-gray-800">Home Decorations</h2>
                    <div className="w-2/6">
                        <hr className="border-gray-300 my-2" />
                    </div>
                </div>
                <div className="ml-8">
                    <ProductSlider />
                </div>
                <Divider />
                <div className="relative ml-8 mt-20 mb-6">
                    <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                    <h2 className="text-2xl font-bold relative pl-4 text-gray-800">Kitchen Items</h2>
                    <div className="w-2/6">
                        <hr className="border-gray-300 my-2" />
                    </div>
                </div>
                <div className="ml-8">
                    <ProductSlider />
                </div>
                <Divider />



                <EnterEmail />
                <Footer />
            </div>
        </div>
    )
}
