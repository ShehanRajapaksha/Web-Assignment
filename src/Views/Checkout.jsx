import React from 'react'
import { useUtility } from '../Hooks/UtilityProvider'
import { Button } from '@material-tailwind/react';
import { useFormik } from 'formik';
import { CheckoutSchema } from '../Schemas/CheckoutSchema';
import ErrorForm from '../Components/ErrorForm';

export default function Checkout(params) {
    const { isSmall } = useUtility()



    const onSubmit = () => {
        console.log(values);
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit,isSubmitting } = useFormik({
        initialValues: {
            email: "",
            fname: "",
            lname: "",
            address: "",
            billingCity: "",
            billingZip: "",
            phone: ""
        },
        validationSchema: CheckoutSchema,
        onSubmit,
    })
    // console.log(errors);

    return (

        <div className='bg-gray-100'>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <a href="#" className="text-2xl font-bold text-gray-800">
                    {isSmall ? (
                        <img src="/icons/Zenko-logo-small.png" className="h-12 md:w-auto sm:scale-50" alt="Zenko Logo" />
                    ) : (
                        <div className="p-2">
                            <img src="/icons/Zenko-logo-crop.png" className="h-12 w-auto" alt="Zenko Logo" />
                        </div>
                    )}

                </a>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                                ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path stroke-linecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </a>
                                <span className="font-semibold text-gray-900">Shop</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
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


            {/*Top Navbar with logo above */}
            {/*Left Panel with Products*/}

            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable payment method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                                <span className="float-right text-gray-400">42EU - 8.5US</span>
                                <p className="text-lg font-bold">$138.99</p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="flex w-full flex-col px-4 py-4">
                                <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                                <span className="float-right text-gray-400">42EU - 8.5US</span>
                                <p className="mt-auto text-lg font-bold">$238.99</p>
                            </div>
                        </div>
                    </div>

                    {/*Shipping type panel */}
                    <p className="mt-8 text-lg font-medium">Payment Methods</p>
                    <form className="mt-5 grid gap-6">
                        <div className="relative">
                            <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                                <div className='flex flex-row'>
                                    <img className="w-8 md:w-14 object-contain" src="/assets/Visa_logo.png" alt="Visa" />
                                    <img src='/assets/MC_logo.png' className="w-8 md:w-14 object-contain mx-1" alt="mastercard" />
                                    <img src='/assets/amex_logo.png' className="w-8 md:w-14 object-contain -ml-2" alt="amex" />
                                </div>

                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Card Payments</span>
                                    <p className="text-slate-500 text-sm leading-6">Pay via payment portal</p>
                                </div>
                            </label>
                        </div>
                        <div className="relative">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                                <img className="w-14 object-contain" src="/assets/paypal_logo.png" alt="" />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Paypal</span>
                                    <p className="text-slate-500 text-sm leading-6">pay via Paypal portal</p>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>


                {/*Right Side Panel */}
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Have an account Already?<span className='hover:text-black mx-1 cursor-pointer'><u>Sign in</u></span> </p>
                    <div className="">
                        <label for="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                        {/*Input Group */}
                        <form onSubmit={handleSubmit}>
                            <div className="relative">

                                <input
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    onBlur={handleBlur}
                                    className={`w-full rounded-md border px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 
                                        ${errors.email && touched.email ? 'border-red-500' : 'border-gray-200'}`}
                                    placeholder="your.email@gmail.com"
                                />




                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path stroke-linecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                            {errors.email && touched.email && (
                                <ErrorForm msg={errors.email}/>
                            )}


                            <label for="Name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
                            <div className="relative flex flex-row">
                                <div className='w-full mr-2 flex '>
                                    <input
                                        type="text"
                                        value={values.fname}
                                        onChange={handleChange}
                                        id="fname"
                                        onBlur={handleBlur}
                                        name="fname"
                                        className={`w-full rounded-md border px-4 py-3 pl-4 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ${errors.fname && touched.fname ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="First Name" />

                                </div>
                                <div className='w-full mx-2 flex'>
                                    <input type="text"
                                        value={values.lname}
                                        onChange={handleChange}
                                        id="lname"
                                        name="lname"
                                        onBlur={handleBlur}
                                        className={`w-full  rounded-md border   py-3 pl-4 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ${errors.lname && touched.lname ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="Last Name" />

                                </div>

                            </div>
                            {(errors.fname || errors.lname) && (touched.fname && touched.lname) && (
                                <ErrorForm msg={errors.fname|| errors.lname}/>
                            )}
                            <label for="address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                            <div className="flex">
                                <div className="relative w-full flex-shrink-0">
                                    <input
                                        type="text"
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="address"
                                        name="address"
                                        className={`w-full rounded-md border px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ${errors.address && touched.address ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="Address"
                                    />

                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                        </svg>

                                    </div>
                                </div>
                               

                            </div>
                            {errors.address && touched.address && (
                                <ErrorForm msg={errors.address}/>
                            )}
                            <div className="flex flex-col sm:flex-row  mt-4 mb-2">
                                <div className='flex flex-row mb-4 md:mb-0'>
                                    <select type="text" name="billingState" className="md:w-auto w-1/3 mr-2 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                        <option value="State">State</option>
                                    </select>
                                    <div className="relative flex-shrink-0 md:w-3/4 w-2/3">
                                        <input
                                            type="text"
                                            value={values.billingCity}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="billingCity"
                                            name="billingCity"
                                            className={`w-3/4 rounded-md border px-4 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ${errors.billingCity && touched.billingCity ? 'border-red-500' : 'border-gray-200'
                                                }`}
                                            placeholder="City"
                                        />

                                    </div>
                                </div>

                                <input
                                    type="text"
                                    value={values.billingZip}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="billingZip"
                                    name="billingZip"
                                    className={`flex-shrink-0 rounded-md border md:mx-2 w-1/3 lg:w-auto md:w-2/3 border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ${errors.billingZip && touched.billingZip ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                    placeholder="ZIP"
                                />
                           
                            </div>

                            {(errors.billingCity || errors.billingZip) && (touched.billingCity && touched.billingZip) && (
                                <ErrorForm msg={errors.billingCity||errors.billingZip}/>
                            )}
                            <label for="phone" className="mt-4 mb-2 block text-sm font-medium">Contact number</label>
                            <div className="relative flex flex-col">

                                <div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={values.phone}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={`w-3/4 rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-200'}`}
                                        placeholder="123-456-7890"

                                    />
                                </div>


                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-gray-400 
                                        `}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                </div>
                            </div>
                            {errors.phone && touched.phone && (
                                <ErrorForm msg={errors.phone}/>
                            )}
                        </form>

                        {/*<!-- Total -->*/}
                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                <p className="font-semibold text-gray-900">$399.00</p>
                            </div>
                            <div className="flex items-center justify-between  mt-1">
                                <p className="text-sm font-medium text-gray-900">Shipping</p>
                                <p className="font-semibold text-gray-900">$8.00</p>


                            </div>
                            <div className="flex items-center justify-between  mt-1">
                                <p className="text-sm font-medium text-gray-900">Code:908N</p>
                                <p className="font-semibold text-gray-900">-$8.00</p>


                            </div>
                            <div className="relative my-2 flex flex-row">
                                <input type="text" id="discount" name="discount" className="w-7/12 rounded-md border placeholder:text-slate-800 border-black px-4 py-3 my-2 pl-2 text-sm shadow-sm outline-none focus:z-10 focus:border-slate-500" placeholder="Enter Discount Code" />
                                {/*<button className="ml-2 bg-blue-gray-900/95 hover:bg-blue-700  mt-2 text-white  py-3 h-fit px-4 rounded">Apply</button>*/}
                                <Button variant='gradient' className='mx-2 h-11 mt-2' size='sm'> Apply </Button>

                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">$408.00</p>
                        </div>
                    </div>
                    <button onClick={onSubmit} disabled={isSubmitting} className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
                </div>
            </div>

        </div>

    )
}