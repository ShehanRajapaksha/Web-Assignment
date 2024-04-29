import { ReadonlyRating } from "./ReadonlyRating";
import {
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useUtility } from "../Hooks/UtilityProvider";


export default function ProductCard({item,index}) {  
  const{updateOpenCart}= useUtility()
  const {addItem} =useCart()
  const [isCartButtonHovered, setIsCartButtonHovered] = useState(false);
  const [isHeartButtonHovered, setIsHeartButtonHovered] = useState(false);
  
  const handleProductClick=(productId)=> {
    // Get the existing list of recently accessed product IDs from local storage
    let recentProducts = localStorage.getItem('recentProducts');
    recentProducts = recentProducts ? JSON.parse(recentProducts) : [];
  
    // Add the new product ID to the list
    recentProducts.push(productId);
  
    // Limit the list to 10 items
    if (recentProducts.length > 10) {
      recentProducts.shift(); // Remove the oldest item from the top
    }
  
    // Store the updated list back to local storage
    localStorage.setItem('recentProducts', JSON.stringify(recentProducts));
  }

  return (
    <div className="bg-white text-gray-700 w-64 shadow-sm rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 mt-3 mb-6" onClick={() => handleProductClick(item.name)}>
      <img
        className="w-full object-cover lg:h-56 h-32"
        src={item.image}
        alt={item.name}
      />
      <div className="p-2 flex flex-col gap-0 ">
        {/*Header */}
        <h2 className="text-xl overflow-ellipsis overflow-hidden whitespace-no-wrap">
          {item.name}
        </h2>

        {/*Price */}
        <div>
          <span className="font-bold">
            ${item.price}
          </span>

          <div className="items-center gap-2 mt-1">
            <span className=" text-xs line-through opacity-50">
              $500.00
            </span>
            <span className="ml-2 bg-green-400 px-2 py-0.5 rounded-md text-xs text-white">
              save 20%
            </span>
          </div>
        </div>

        {/*Rating */}
        <span className="flex items-center mt-2 mb-0">
          <ReadonlyRating />
          <span className="text-xs ml-2 text-gray-500">
            20k reviews
          </span>
        </span>

        {/*action buttons*/}
        <CardFooter className="mt-0 flex gap-2 px-0" style={{ marginTop: '-1rem', marginBottom:'-1rem' }}>
          <Button
            ripple={true}
            fullWidth={true}
            onMouseEnter={() => setIsCartButtonHovered(true)}
            onMouseLeave={() => setIsCartButtonHovered(false)}
            onClick={() => setTimeout(() => {
              addItem(item)
              updateOpenCart(true);
            }, 100)}
            className={`rounded-md  transition-colors duration-300 ease-in-out shadow-none active:scale-100 ${isCartButtonHovered ? 'bg-red-600' : 'bg-red-500'} text-white focus:outline-none`}
          >
            Add to Cart
          </Button>
          <button
            ripple={true}
            fullWidth={true}
            className="flex items-center justify-center w-12 bg-blue-gray-50 rounded-md focus:outline-none"
            onMouseEnter={() => setIsHeartButtonHovered(true)}
            onMouseLeave={() => setIsHeartButtonHovered(false)}
          >
            <FontAwesomeIcon icon={faHeart} className={isHeartButtonHovered ? "text-red-400 " : "text-grey"} />
          </button>
        </CardFooter>
      </div>
    </div> 
  );
}