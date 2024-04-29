import React from "react";
import Marquee from "react-fast-marquee";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useUtility } from "../Hooks/UtilityProvider";

const Announcement = () => {
  const {isSmall} = useUtility()
  return (
    !isSmall&&( <div className="w-full  flex-row hidden lg:flex">
    <div className=" bg-red-600 text-white flex justify-between items-center py-2 px-0 text-sm mr-0 lg:w-9/12 xl:w-10/12 ">
      <Marquee speed={80} gradient={false}>
        <div className="announcement-text text1 flex items-center">
          <span className="mr-64">Upto 50% SALE!</span>
          <span className="mr-64">zenko.com.au</span>
        </div>
        <div className="announcement-text text2 flex items-center">
          <span className="mr-64">Upto 50% SALE!</span>
          <span className="mr-64">zenko.com.au</span>
        </div>
      </Marquee>
    </div>
    <div className="lg:w-3/12 xl:w-2/12 bg-red-600 border-l border-white flex flex-row items-center justify-end h-full py-1 px-0 ">
      <div className="flex flex-row items-center mr-4 py-2 bg-red-600 rounded-md text-white h-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 mr-2"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
      </svg>
      
        </svg>
        <Typography
          as="a"
          href="#"
          className="text-xs font-medium inline-flex"
        >
          Help & Support
        </Typography>
      </div>
      <div className="flex flex-row items-center mr-2 py-2 bg-red-600 rounded-md text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
        <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-xs" />
        <Typography
          as="a"
          href="#"
          className="text-xs font-medium inline-flex"
        >
          Track My Order
        </Typography>
      </div>
    </div>
  </div>)
   
  );
};

export default Announcement;