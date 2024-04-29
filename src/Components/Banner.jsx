import React from "react";
import ps5 from "../assets/ps5 red.png";
import tv from "../assets/vaccume red.png";
import cooler from "../assets/home deco red.png";

const Banner = () => {
  const items = [
    { id: 1, title: "Play Station 5", image: ps5 },
    { id: 2, title: "Sony TV", image: tv },
    { id: 3, title: "Air cooler", image: cooler },
  ];

  return (
    <div>
      <div className="px-4 lg:px-12 max-w-screen-2xl mx-auto mt-8 mb-5">
        <h2 className="text-4xl text-center md:w-1/2 mx-auto text-gray-800 mb-0">
          New Arrivals
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between m-8 mt-0 -mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative mb-12 cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <img src={item.image} alt="" className="h-64 rounded-md w-full" />
            <div
              className="absolute bottom-0 left-0 flex flex-col justify-end items-start bg-gradient-to-t from-black via-transparent to-transparent px-4 py-4"
            >
              <h3 className="font-bold text-blue-gray-100 mb-2">{item.title}</h3>
              <a href="" className="text-blue-gray-200 hover:text-red-500 underline">
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
