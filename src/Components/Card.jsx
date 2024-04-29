import React, {useState} from 'react';
import {
    Typography,
  } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "react-use-cart";
import { useUtility } from "../Hooks/UtilityProvider";

export default function Card ({item,index}){
    const{updateOpenCart}= useUtility()
    const {addItem} =useCart()
    const [isCartButtonHovered, setIsCartButtonHovered] = useState(false);
    const [isHeartButtonHovered, setIsHeartButtonHovered] = useState(false);

    const handleProductClick=(productId)=> {
        // Get the existing list of recently accessed product IDs from local storage
        let recentProducts = localStorage.getItem('recentProducts');
        recentProducts = recentProducts ? JSON.parse(recentProducts) : [];
      
        // Add the new product ID to the list
        if (!recentProducts.includes(productId)) {
            // Add the new product ID to the list
            recentProducts.push(productId);
        }
      
        // Limit the list to 10 items
        if (recentProducts.length > 10) {
          recentProducts.shift(); // Remove the oldest item from the top
        }
      
        // Store the updated list back to local storage
        localStorage.setItem('recentProducts', JSON.stringify(recentProducts));
      }

    return (
        <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" onClick={() => handleProductClick(item.id)}>
            <a href="#">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-80 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-80 h-32">
                    <div className='flex items-center justify-between'>
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-500"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                            </svg>
                            5.0
                        </Typography>
                    </div>
                    
                    <p className="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">${item.price}</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                        </del>
                        <div className="ml-auto flex gap-2">
                            <button
                                ripple={true}
                                fullWidth={true}
                                className="flex items-center justify-center w-8 h-8 bg-blue-gray-50 rounded-md focus:outline-none"
                                onMouseEnter={() => setIsHeartButtonHovered(true)}
                                onMouseLeave={() => setIsHeartButtonHovered(false)}
                            >
                                <FontAwesomeIcon icon={faHeart} className={isHeartButtonHovered ? "text-red-400 " : "text-blue-gray-700"} />
                            </button>
                            <button
                                ripple={true}
                                fullWidth={true}
                                className="flex items-center justify-center w-8 h-8 bg-blue-gray-50 rounded-md focus:outline-none"
                                onMouseEnter={() => setIsCartButtonHovered(true)}
                                onMouseLeave={() => setIsCartButtonHovered(false)}
                                onClick={(e) =>{ 
                                    e.preventDefault()
                                    setTimeout(() => {
                                   
                                    addItem(item)
                                    
                                    updateOpenCart(true);
                                  }, 100)}}
                                
                            >
                                <FontAwesomeIcon icon={faCartShopping} className={isCartButtonHovered ? " text-blue-gray-900 " : " text-blue-gray-700"}/>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

