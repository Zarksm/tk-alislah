"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const SwipperHero = () => {
  const slides = [
    {
      src: "/assets/images/fotbar.jpeg",
      text: "Selamat Datang di TK Al Ishlah",
    },
    {
      src: "/assets/images/5.jpeg",
      text: "Belajar dengan Cinta dan Kasih Sayang",
    },
    {
      src: "/assets/images/2.jpeg",
      text: "Membangun Generasi Cerdas dan Berakhlak Mulia",
    },
    {
      src: "/assets/images/4.jpeg",
      text: "Lingkungan Belajar yang Kreatif dan Menyenangkan",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[600px] md:h-[750px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Image */}
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h2 className="text-center text-white text-2xl md:text-5xl font-extrabold drop-shadow-lg">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipperHero;
