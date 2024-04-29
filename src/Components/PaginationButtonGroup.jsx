import React, { useState,useEffect } from 'react';
import { useUtility } from '../Hooks/UtilityProvider';

export default function PaginationButtonGroup({ totalItems, itemsPerPage }) {
    const {isSmall}=useUtility()
    console.log(isSmall);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [activePage, setActivePage] = useState(1);
    const [visiblePages, setVisiblePages] = useState(isSmall ? [1, 2, 3] : [1, 2, 3, 4, 5]);

    useEffect(() => {
        setVisiblePages(isSmall ? [1, 2, 3] : [1, 2, 3, 4, 5]);
    }, [isSmall]);

    const handlePageClick = (page) => {
        setActivePage(page);
        if (page > visiblePages[visiblePages.length - 1]) {
            setVisiblePages(prevVisiblePages => prevVisiblePages.map(p => p + 1));
        } else if (page < visiblePages[0]) {
            setVisiblePages(prevVisiblePages => prevVisiblePages.map(p => p - 1));
        }
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-8 mb-2 overflow-x-auto">
        <button disabled={activePage === 1}
        className={`flex focus:outline-none items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${activePage > 1 ? 'text-gray-900' : 'text-gray-500'}`}
        onClick={() => handlePageClick(activePage - 1)}
        type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
        <span className='hidden md:block'>Previous</span>
        
    </button>
            <div className="flex items-center gap-2">
                {visiblePages.map(page => (
                    <button key={page}
                        className={`relative focus:outline-none h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase ${activePage === page ? 'bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none' : 'text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'}`}
                        onClick={() => handlePageClick(page)}
                        type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            {page}
                        </span>
                    </button>
                ))}
            </div>
            <button disabled={activePage === totalPages}
                className="flex focus:outline-none items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => handlePageClick(activePage + 1)}
                type="button">
                <span className='hidden md:block'>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                    aria-hidden="true" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
            </button>
        </div>
    );
}
