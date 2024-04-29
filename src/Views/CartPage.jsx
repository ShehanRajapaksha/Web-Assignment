import React from 'react'
import { useUtility } from '../Hooks/UtilityProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Card, Typography } from '@material-tailwind/react';
import { useCart } from 'react-use-cart';
import CartPageItem from '../Components/CartPageItem';
import { Link } from 'react-router-dom';


export default function CartPage() {

    const { items, cartTotal, isEmpty } = useCart()
    const { isSmall } = useUtility()
    const shipping = 32

    return (
        <div className='bg-gray-100'>   {/*Header Component */}
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    {isSmall ? (
                        <img src="/icons/Zenko-logo-small.png" className="h-12 md:w-auto sm:scale-50" alt="Zenko Logo" />
                    ) : (
                        <div className="p-2">
                            <img src="/icons/Zenko-logo-crop.png" className="h-12 w-auto" alt="Zenko Logo" />
                        </div>
                    )}

                </Link>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">1</a>

                                <span className="font-semibold text-gray-900">Shop</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">2</a>
                                <span className="font-semibold text-gray-900">Shipping</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                                <span className="font-semibold text-gray-500">Payment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/*Main Grid  */}
            {isEmpty ? (
                <div className='h-screen flex flex-col justify-center items-center bg-white rounded-md px-4 py-4 text-center'>
                    <img src='/assets/Cart.jpg' className='h-72 w-72 -mt-20 mb-4 pb-4' />
                    <Typography variant='h3'> Your Cart is Empty</Typography>
                    <Typography variant='lead' as="a" className=' cursor-pointer hover:text-Red2'>
                        <span> <FontAwesomeIcon icon={faArrowLeft} className='mx-2' /> </span>
                        Back to Shopping
                    </Typography>
                </div>
            ) : (
                <div className=" grid md:grid-cols-[2fr,1fr] gap-4 h-screen">
                    <div className=" px-2 md:px-4 pt-3 w-screen md:w-auto">
                        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 md:py-4 sm:px-6 flex-1 h-auto ">

                            {/*Items */}
                            {items.map((item, index) => (
                                <CartPageItem item={item} index={index} />
                            ))}




                        </div>

                    </div>
                    {/*Right Price Panel */}
                    <div className=''>
                        <Card className='px-2 pt-3 mt-11 space-y-3 sm:w-screen md:w-auto'>
                            <div class="w-full max-w-md p-4  rounded-lg  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex items-center justify-center mb-11">
                                    <h4 class=" text-2xl font-bold leading-none text-gray-900 dark:text-white"> Order Summary</h4>

                                </div>
                                <div class="flow-root">
                                    <ul  class="divide-y divide-gray-200 dark:divide-gray-700">
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center">

                                                <div class="flex-1 min-w-0 ms-4">
                                                    <Typography variant='Lead'> SubTotal</Typography>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    ${cartTotal}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center ">

                                                <div class="flex-1 min-w-0 ms-4">
                                                    <Typography variant='Lead'> Shipping Cost</Typography>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    ${shipping}
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center">

                                                <div class="flex-1 min-w-0 ms-4">
                                                    <Typography variant='h5'> Order Total</Typography>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    <Typography variant='h5'> {cartTotal + shipping}</Typography>
                                                </div>
                                            </div>
                                        </li>



                                    </ul>
                                </div>
                                <div className='flex flex-col mt-16 pl-2'>
                                    <Link to="/checkout">
                                        <button className="my-2 w-full rounded-md bg-gray-900 hover:bg-gray-800 px-6 py-3 font-medium text-white transition-colors duration-300">Place Order</button>
                                    </Link>
                                    <button className="my-2 w-full rounded-md bg-gradient-to-r from-red-800 to-red-600 hover:from-red-900 hover:to-red-700 px-6 py-3 font-medium text-white transition-colors duration-300">Back to Shopping</button>

                                </div>
                            </div>

                        </Card>

                        <div className='flex flex-row justify-center items-center my-2'>
                            <p className='text-xs'><span className='underline mx-2'>Shipping Policy</span><span className='underline mx-2'>Return Policy</span><span className='underline mx-2'>FAQ</span></p>
                        </div>
                    </div>
                </div>)}


        </div>
    )
}