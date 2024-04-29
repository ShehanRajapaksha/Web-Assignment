import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import test from "../assets/ZENKO1.png";
import test1 from "../assets/ZENKO2.png";
import test3 from "../assets/ZENKO3.png"

const slides = [
    test,
    test1,
    test3,
];

export default function MobileCarousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative ">
      <div className="flex transition-transform ease-in-out duration-700" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index}`} className="w-full" />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/0 text-grey-800  focus:outline-none">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/0 text-grey-800  focus:outline-none">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
