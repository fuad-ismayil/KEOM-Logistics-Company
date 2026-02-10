"use client";
import WavyText from "./WavyText";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Service = { id: string; iconSrc: string; style: string; title: string; href: string; description: string; };
const SERVICES: Service[] = [
  {
    id: "flexible-shipment",
    iconSrc: "/images/freightservices/fs1.png",
    style: "pr-[85px] mt-[50px]",
    title: "Flexible Shipment",
    href: "/single-service",
    description:
      "Thanks to our cutting edge technological infrastructure & skilled team, including specialists in supply.",
  },
  {
    id: "ship-your-product",
    iconSrc: "/images/freightservices/fs2.png",
    style: "px-[50px] mt-[50px]",
    title: "Ship Your Product",
    href: "/single-service",
    description:
      "Thanks to our cutting edge technological infrastructure & skilled team, including specialists in supply.",
  },
  {
    id: "track-shipment",
    iconSrc: "/images/freightservices/fs3.png",
    style: "px-[50px] mt-[50px]",
    title: "Track Shipment",
    href: "/single-service",
    description:
      "Thanks to our cutting edge technological infrastructure & skilled team, including specialists in supply.",
  },];
export default function ServicesShowcase() {
  return (
    <section className="relative bg-white pb-[80px] pt-[80px] md:pt-[90px] lg:pb-[90px] lg:pt-[110px]">
      <div className="mx-auto w-full px-6 lg:px-[8%]">
        <div className="leading-[5] text-center lg:text-left">
          <h2 className="text-[40px] font-[700] leading-[1.2] text-[#003b49] lg:text-[60px]">
            <WavyText text="Freight" className="text-[#99b1b6]" />
            <br />
            <WavyText text="services" delay={0.2} />
          </h2>
          <div className="flex items-center gap-6 text-center lg:text-left">
            <span className="text-[14px] text-center lg:text-left w-full font-semibold uppercase tracking-wide text-[#FF7D44]">WHAT I DO</span>
            <img src="/images/freightservices/line.svg" alt="line" className="ml-auto hidden w-[90%] lg:block " />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          allowTouchMove={true}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false, }}
          breakpoints={{
            768: { slidesPerView: 2, allowTouchMove: true, },
            1024: { slidesPerView: 3, allowTouchMove: false, },
          }}>
          {SERVICES.map((item, idx) => (
            <SwiperSlide key={item.id}>
              <div className={["relative h-full", idx !== 0 ? "md:border-l md:border-[#e9eef0]" : "",].join(" ")}>
                <ServiceCard {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>);
}