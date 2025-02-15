import React, { useState, useEffect, useRef, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Carousel({
  slides,
  autoSlideInterval = 5000,
  resumeAfterInteraction = 5000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const startAutoSlide = useCallback(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
      startAutoSlide();
    }, autoSlideInterval);
  }, [nextSlide, autoSlideInterval]);

  useEffect(() => {
    startAutoSlide();

    return () => {
      resetTimeout();
    };
  }, [startAutoSlide]);

  const handleUserInteraction = () => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, resumeAfterInteraction);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    handleUserInteraction();
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl w-[95%] place-self-center object-cover
       mb-5 mt-20 lap:mt-[6rem] desk:mt-[12rem]"
      aria-live="polite">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={slide}
              alt={`Image ${index + 1}`}
              className={`w-full h-[30rem] object-cover brightness-75
                                              desk:h-[40rem]
                                              lap:h-[33rem]
                                              tab:h-[20rem]`}
            />
          </div>
        ))}
      </div>
      <button
        className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 group/btn bg-white
                     lap:inline-flex lap:scale-100 lap:hover:scale-[103%] lap:hover:bg-white lap:hover:bg-opacity-65
                     scale-75 duration-200 rounded-3xl items-center font-medium text-sm px-2 py-2"
        onClick={() => {
          prevSlide();
          handleUserInteraction();
        }}
        aria-label="Previous Slide">
        <BsChevronCompactLeft className="size-7 duration-200 lap:group-hover/btn:-translate-x-0.5" />
      </button>
      <button
        className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 group/btn bg-white
                     lap:inline-flex lap:scale-100 lap:hover:scale-[103%] lap:hover:bg-white lap:hover:bg-opacity-65
                     scale-75 duration-200 rounded-3xl items-center font-medium text-sm px-2 py-2"
        onClick={() => {
          nextSlide();
          handleUserInteraction();
        }}
        aria-label="Next Slide">
        <BsChevronCompactRight className="size-7 duration-200 lap:group-hover/btn:translate-x-0.5" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`size-3 rounded-full lap:hover:scale-125 duration-200 ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 lap:hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
