"use client";

import { Autoplay, Pagination, Navigation, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import Image from "next/image";

type ImageScrollerProps = {
  title: string;
  images: string[];
};

export default function ImageScroller({ title, images }: ImageScrollerProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        className="w-full max-w-xl aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation, Zoom]}
        slidesPerView={1}
        spaceBetween={20}
        zoom={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="swiper-zoom-container w-full h-full">
              <Image
                src={img}
                alt={title}
                fill
                priority={false}
                loading="lazy"
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
