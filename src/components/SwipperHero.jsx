"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const SwipperHero = () => {
  const images = [
    "/assets/images/h1.jpeg",
    "/assets/images/h2.jpeg",
    "/assets/images/h3.jpeg",
    "/assets/images/h4.jpeg",
  ];

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[300px] md:h-[500px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Image */}
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Optional Content on Overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold">
                Welcome to Slide {index + 1}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipperHero;
