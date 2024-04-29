import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart'



export default function CartPageItem({item,index}) {


    const { updateItemQuantity, removeItem } = useCart()

    const handleDecrement = () => {
      updateItemQuantity(item.id, item.quantity - 1)
    };
  
    const handleIncrement = () => {
      updateItemQuantity(item.id, item.quantity + 1)
    };

    return(
        
        <div className='flex flex-row w-full border-b border-gray-200 pb-2 ' key={index}>
        <div className="flex flex-col rounded-lg bg-white sm:flex-row w-7/12">
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{item.name}</span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="text-lg font-bold">{item.price}</p>
            </div>


        </div>
        <div className='flex flex-col justify-center items-start w-4/12 md:mt-0 mt-10'>

        <div className="flex items-center border border-blue-gray-100 w-32 mr-6">
        <button
          className=" rounded-full w-8 h-8 flex items-center justify-center focus:outline-none hover:bg-blue-gray-50"
          onClick={handleDecrement}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="mx-2   px-4 py-2">{item.quantity}</span>
        <button
          className=" rounded-full w-8 h-8 flex items-center justify-center focus:outline-none hover:bg-blue-gray-50"
          onClick={handleIncrement}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>

      </div>


        </div>
        <div className='flex items-end justify-end  w-1/12 p-4'>
            <button className="focus:outline-none" onClick={() => removeItem(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-colors duration-300 hover:text-Red1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    </div>
    
    )
    
}