import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MobileSideBar } from "./MobileSideBar";

export default function MobileSearch() {

  return (

    <div className="container mx-auto my-auto lg:hidden ">


      <div className=" flex flex-row relative w-full h-10 gap-2 md:w-100vh mt-4 mb-2">
        <div className="mt-2 mr-1 z-50 overflow-y-visible">
          <MobileSideBar />
        </div>
        <div className="flex-grow">
        <input
        type="text"
        id="simple-search-mobile"
        class="bg-gray-50 border  border-gray-400 text-gray-900 text-sm rounded-xl  block w-full ps-4 p-2.5 focus:outline-gray-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Looking For Something?"
        required />
      </div>
      
        <Button size="sm" className="rounded-xl bg-Red1 focus:outline-none">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="1x"
            style={{ color: "white" }} />

        </Button>
      </div>
    </div>
  )
}