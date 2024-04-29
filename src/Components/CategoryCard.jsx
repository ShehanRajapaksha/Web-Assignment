import React from "react";

export default function CategoryCard({ children, imgSrc, animation }) {
  return (
    <div className="p-4 max-w-xs">
      <div className="relative max-w-xs h-40 overflow-hidden rounded-md shadow-lg group transition-transform duration-300 ease-in-out transform-gpu hover:scale-105">
        <img
          src={imgSrc}
          alt=""
          className={`w-full h-full object-cover ${
            animation === "scale" ? "transition-transform duration-300 ease-in-out transform-gpu hover:scale-105" : ""
          }`}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black via-transparent to-transparent">
          <div className="text-white text-center text-lg">{children}</div>
        </div>
      </div>
    </div>
  );
}
