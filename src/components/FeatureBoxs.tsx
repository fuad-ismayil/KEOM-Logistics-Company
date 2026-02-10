"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaTruck, FaClock, FaSackDollar, FaHeadphonesSimple, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
export default function FeatureSlider() {
    const features = [
        { id: 1, icon: <FaTruck className="text-[#ff7d44]" size={16} />, title: "TRACK SHIPMENT", link: "/contact" },
        { id: 2, icon: <FaClock className="text-[#ff7d44]" size={16} />, title: "ON-TIME DELIVERY", link: "/contact" },
        { id: 3, icon: <FaSackDollar className="text-[#ff7d44]" size={16} />, title: "RELIABLE SERVICE FEE", link: "/contact" },
        { id: 4, icon: <FaHeadphonesSimple className="text-[#ff7d44]" size={16} />, title: "24/7 ONLINE SUPPORT", link: "/contact" },];
    return (
        <div className="w-full bg-white border-b border-gray-100">
            <Swiper modules={[Autoplay]} spaceBetween={0} speed={2000} slidesPerView={1} loop={true} autoplay={{ delay: 1500, disableOnInteraction: false }} breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 }, }} className="w-full">
                {features.map((feature, index) => (
                    <SwiperSlide key={feature.id}>
                        <Link href={feature.link} className="block w-full h-full">
                            <div className={`group flex items-center justify-between px-[52px] py-[25px] cursor-pointer transition-all duration-300 hover:bg-gray-50 ${index !== features.length - 1 ? "lg:border-r lg:border-gray-100" : ""}`}>
                                <div className="flex items-center gap-4">
                                    <div className="shrink-0">{feature.icon}</div>
                                    <h4 className="text-[#032D3C] font-bold text-[16px] tracking-wide">{feature.title}</h4>
                                </div>
                                <div className="text-gray-300 group-hover:text-[#ff7d44] transition-colors duration-300"><FaArrowRightLong size={16} /></div>
                            </div>
                        </Link>
                    </SwiperSlide>))}
            </Swiper>
        </div>);
}