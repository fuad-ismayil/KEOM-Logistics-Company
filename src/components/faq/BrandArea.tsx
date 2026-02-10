"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
type BrandItem = { src: string; alt: string; w?: number; h?: number };
const BRANDS: BrandItem[] = [
  { src: "/images/brands/b-logo1.png", alt: "Brand 1", h: 42 },
  { src: "/images/brands/b-logo2.png", alt: "Brand 2", h: 42 },
  { src: "/images/brands/b-logo3.png", alt: "Brand 3", h: 42 },
  { src: "/images/brands/b-logo4.png", alt: "Brand 4", h: 42 },
  { src: "/images/brands/b-logo5.png", alt: "Brand 5", h: 42 },];
export default function BrandArea() {
  return (
    <div className="bg-white items-center justify-center w-full py-[60px]">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1000}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}>
        {BRANDS.map((b, idx) => (
          <SwiperSlide key={`${b.src}-${idx}`}>
            <div className="flex h-[70px] items-center justify-center">
              <Image src={b.src} alt={b.alt} width={b.w ?? 180} height={b.h ?? 42} className="h-[42px] w-auto object-contain opacity-90" priority={idx < 4} />
            </div>
          </SwiperSlide>))}
      </Swiper>
    </div>);
}