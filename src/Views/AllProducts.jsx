import React from 'react'
import {

    Drawer,
    Button,
    Typography,
    IconButton
} from '@material-tailwind/react';
import { Navigationbar } from '../Components/Navigationbar'
import FilterComponent from '../Components/FilterComponent';
import ProductList from '../Components/ProductsList';
import Footer from '../Components/Footer';
import PaginationButtonGroup from '../Components/PaginationButtonGroup';
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../requests/products";
import { useUtility } from "../Hooks/UtilityProvider";


function FilterDrawer(params) {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <React.Fragment>
            <button className='rounded-md px-2 font-semibold text-center  text-md' onClick={openDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>


            </button>
            <Drawer open={open} onClose={closeDrawer} size={500} placement='bottom' className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Filters
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className='h-full -mt-4'>
                    <FilterComponent />
                </div>
            </Drawer>
        </React.Fragment>
    );
}


export default function AllProducts(params) {
    const { isSmall } = useUtility()

    const { data: products, isLoading } = useQuery({
        queryFn: () => fetchProducts(),
        queryKey: ["products"],


    })


    return (
        <div>
            <div className='bg-gray-100'>
                <Navigationbar />
                <div className='w-full flex flex-row'>
                    <div className='w-4/12 lg:w-3/12' ></div>

                    <div className="relative  mt-16 mb-6 w-9/12 -ml-20 ">
                        <div className="absolute left-0 top-0 bg-red-400 w-12 h-8 transform skew-x-45"></div>
                        <h2 className="text-3xl font-bold relative pl-4 text-gray-800">All Products</h2>
                        <div className="w-2/6">
                            <hr className="border-gray-300 my-2" />
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row '>
                    <div className='w-3/12  '></div>
                    <div className="w-9/12 flex items-end justify-between md:-ml-20 -ml-16">
                        {isSmall ? (
                            <FilterDrawer />
                        ) : (
                            <div className="md:ml-32 lg:ml-0 text-xs text-gray-500">
                                Showing 24 of 700 results
                            </div>
                        )}
                        <div className="relative flex flex-row rounded-none md:-mr-4 -mr-12">
                            <span className='mx-2'>Show:</span>
                            <select className="block  w-24 py-1 pl-2 pr-8 text-xs text-center font-medium border border-gray-500 rounded-none bg-white focus:outline-none focus:ring focus:border-blue-200">
                                <option value="24" >24</option>
                                <option value="48" >48</option>
                                <option value="72" >72</option>
                            </select>

                        </div>
                    </div>
                </div>

                <div className='flex flex-row p-2 md:mx-4 mx-0'>
                    <div className='w-3/12 md:w-4/12 lg:w-3/12 xl:w-2/12 -mt-8 hidden md:block'>
                        <FilterComponent />
                    </div>
                    <div className=' w-full md:w-8/12 lg:w-9/12 xl:w-10/12 bg-white rounded-md md:mx-2 mx-0  py-4'>
                        <ProductList Querykey={"products"} isLoading={isLoading} />
                        <PaginationButtonGroup />


                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}