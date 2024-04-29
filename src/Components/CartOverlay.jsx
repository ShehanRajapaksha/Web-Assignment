import React, { useState, useEffect, useRef } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Typography, List, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import CartItem from "./CartItem";
import { useUtility } from "../Hooks/UtilityProvider";

export function CartOverlay() {
  const { isEmpty, items, cartTotal } = useCart();
  const { openCart, updateOpenCart, isSmall } = useUtility();
  const [isClosing, setIsClosing] = useState(false);
  const cartRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      updateOpenCart(false);
      setIsClosing(false);
    }, 300); // Adjust the timeout to match your animation duration
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        handleClose(); 
      }
    };

    if (openCart) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [openCart, updateOpenCart]);

  return (
    <>
      {!isSmall && openCart && (
        <div
          className={`cart-drawer fixed top-0 z-50 w-full ${
            isClosing ? "animate-fade-out-right" : "animate-slide-in-right"
          } right-0`}
        >
          <div className="flex justify-end">
            <Card
              ref={cartRef}
              className="z-50 h-screen w-1/3 p-4 shadow-xl shadow-blue-gray-900/50 flex flex-col rounded-none"
            >
              <div className="mb-2 p-4 flex justify-between">
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#E12E02"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Typography variant="h5" color="blue-gray">
                    Your Cart
                  </Typography>
                </div>
                <div>
                  <FontAwesomeIcon icon={faTimes} onClick={handleClose} />
                </div>
              </div>
              <hr className="my-2 border-blue-gray-50" />

              {isEmpty ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="-mt-16">
                    <img
                      src="assets/Cart.jpg"
                      className="h-64 p-4 mb-4"
                      alt=""
                    />
                  </div>

                  <Typography variant="h4" className="text-center ">
                    Your cart is empty
                  </Typography>
                  <Typography variant="body" className="text-center my-2">
                    Shop and add items to appear here
                  </Typography>
                </div>
              ) : (
                <>
                  {/* List of Cart */}
                  <List className="overflow-y-auto">
                    {items.map((item, index) => (
                      <CartItem key={index} item={item} index={index} />
                    ))}
                  </List>
                  <div className="flex flex-col mt-auto items-start py-4 z-20">
                    <div className="flex flex-row w-full justify-between">
                      <div className="items-start">
                        <Typography variant="h5">Sub total </Typography>
                      </div>
                      <div className="items-end ml-auto">
                        <Typography variant="h5">$ {cartTotal}</Typography>
                      </div>
                      <hr className="my-2 border-blue-gray-100" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Link to="/Cart" className="w-full flex justify-center">
                      <Button className="rounded-full h-12 w-4/5 bg-Red1 mt-2 px-4 focus:outline-none" fullWidth>
                        Checkout
                      </Button>
                    </Link>
                    <div>
                      <Typography variant="small" className="px-8 pt-4 pb-0">
                        Taxes and Shipping are Calculated at Checkout
                      </Typography>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
