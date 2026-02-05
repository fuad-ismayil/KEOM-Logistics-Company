// components/BrandArea.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type BrandItem = {
  src: string;
  alt: string;
  w?: number;
  h?: number;
};

const BRANDS: BrandItem[] = [
  { src: "/img/brand/b-logo1.png", alt: "Brand 1", w: 180, h: 70 },
  { src: "/img/brand/b-logo2.png", alt: "Brand 2", w: 180, h: 70 },
  { src: "/img/brand/b-logo3.png", alt: "Brand 3", w: 180, h: 70 },
  { src: "/img/brand/b-logo4.png", alt: "Brand 4", w: 180, h: 70 },
  { src: "/img/brand/b-logo5.png", alt: "Brand 5", w: 180, h: 70 },
  { src: "/img/brand/b-logo3.png", alt: "Brand 3", w: 180, h: 70 },
];

export default function BrandArea() {
  return (
    <div className="container mx-auto mt-[120px] px-4">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1000}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {BRANDS.map((b, idx) => (
          <SwiperSlide key={`${b.src}-${idx}`}>
            <div className="flex h-[70px] items-center justify-center">
              <Image
                src={b.src}
                alt={b.alt}
                width={b.w ?? 180}
                height={b.h ?? 70}
                className="h-auto max-h-[36px] w-auto object-contain opacity-90"
                priority={idx < 4}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
