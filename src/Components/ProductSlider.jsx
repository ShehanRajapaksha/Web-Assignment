import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './Card';
import { useUtility } from "../Hooks/UtilityProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../requests/products";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function ProductSlider({ data: propData = [] }) {
    const { openCart } = useUtility();
    const [items, setItems] = useState([]); // Ensures items is always an array

    const { data: products, isLoading, error } = useQuery({
        queryFn: fetchProducts,
        queryKey: ["product"],
        onError: (err) => {
            console.error("Error fetching products:", err);
        },
        onSuccess: (data) => {
            // Ensures items are set to an empty array if products are null
            setItems(data || []);
        }
    });

    useEffect(() => {
        // Ensures that items is not set to undefined if products is undefined
        if (products) {
            if (propData.length === 0) {
                setItems(products);
            } else {
                setItems(products.filter(item => propData.includes(item.id)));
            }
        } else {
            setItems([]);
        }
    }, [propData, products]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading products or no products found.</div>;
    }

    const responsive = {
        desktop: { breakpoint: { max: 4000, min: 1440 }, items: 4 },
        Laptop: { breakpoint: { max: 1440, min: 1350 }, items: 4 },
        LaptopSmall: { breakpoint: { max: 1350, min: 1010 }, items: 3 },
        tablet: { breakpoint: { max: 1075, min: 950 }, items: 2, partialVisibilityGutter: 80 },
        tabletSmall: { breakpoint: { max: 760, min: 450 }, items: 1, partialVisibilityGutter: 100 },
        mobile: { breakpoint: { max: 450, min: 360 }, items: 1, partialVisibilityGutter: 20 },
        smallMobile: { breakpoint: { max: 360, min: 0 }, items: 1 },
    };

    return (
        <div>
            <div>
                <Carousel
                    responsive={responsive}
                    partialVisible={true}
                    removeArrowOnDeviceType={["tablet", "tabletSmall", "mobile"]}
                    arrows={!openCart}
                    className="pb-10 pt-4 pl-0"
                >
                    {items && items.map((item, index) => (
                        <ProductCard key={index} item={item} index={index} />
                    ))}
                </Carousel>
            </div>

            <div className="flex  justify-center ">
            <Link to="/all-products">
              <div className>
                  <Button
                      ripple={true}
                      fullWidth={true} 
                      className="mx-auto transition-colors duration-300 ease-in-out shadow-none active:scale-100 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none">
                      View More Products
                  </Button>
              </div>
            </Link>
          </div>
        </div>
    );
};
