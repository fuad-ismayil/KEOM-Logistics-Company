"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WavyText from "./WavyText";
type HowItWorkItem = {step: string; iconSrc: string; title: string; description: string;};
const DEFAULT_ITEMS: HowItWorkItem[] = [
    {step: "step 01", iconSrc: "/images/howitworks/how-icon-1.png", title: "The Paperwork", description: "Our expertise ensures efficient and seamless operations, tailored to meet your specific needs & drive your business forward.",},
    {step: "step 02", iconSrc: "/images/howitworks/how-icon-2.png", title: "Select Location", description: "Our expertise ensures efficient and seamless operations, tailored to meet your specific needs & drive your business forward.",},
    {step: "step 03", iconSrc: "/images/howitworks/how-icon-3.png", title: "Partners Till The End", description: "Our expertise ensures efficient and seamless operations, tailored to meet your specific needs & drive your business forward.",},];
function HowItWorkCard({ item }: { item: HowItWorkItem }) {
    return (
        <div className="w-full">
            <div className="text-white text-[14px] font-[700] uppercase">{item.step}</div>
            <div className="mt-4 h-px w-full bg-white/10" />
            <div className="mt-10">
                <div className="w-[60px]">
                    <Image src={item.iconSrc} alt={item.title} width={60} height={60} className="h-auto w-full"/>
                </div>
                <h3 className="mt-8 text-white text-[22px] lg:text-[28px] font-[700] leading-[1.2]">{item.title}</h3>
                <p className="mt-4 max-w-[360px] text-[#829696] text-[16px]">{item.description}</p>
            </div>
        </div>);}
export default function HowItWork({ items = DEFAULT_ITEMS, }: { items?: HowItWorkItem[]; }){
    return (
        <section className="bg-[#003b49] overflow-hidden py-[120px]">
            <div className="mx-auto w-full max-w-[1320px] px-4">
                <Fade direction="left" triggerOnce>
                    <div>
                        <h2 className="text-[40px] lg:text-[60px] font-[800] leading-[1.2] text-center lg:text-start">
                            <span className="block text-[#668A92]"><WavyText text="How we work" className="text-[#668A92]" /></span>
                            <span className="mt-2 block text-white"><WavyText text="here is this way " delay={0.2} /><WavyText text="only" delay={0.4} /></span>
                        </h2>
                        <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                            <span className="text-[#FF7D44] text-[14px] font-[700] uppercase">
                                how it works
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-[#003b49] to-[#FF7D44] hidden lg:block" />
                        </div>
                    </div>only
                </Fade>
                <div className="mt-[80px] hidden lg:grid grid-cols-3 gap-8">
                    {items.map((item, idx) => (<Fade key={item.step} direction="left" delay={idx * 120} triggerOnce><HowItWorkCard item={item} /></Fade>))}
                </div>
                <div className="mt-[80px] lg:hidden">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{0: { slidesPerView: 1 }, 768: { slidesPerView: 2 },}}>
                        {items.map((item, idx) => (
                            <SwiperSlide key={item.step}>
                                <Fade direction="left" delay={idx * 80} triggerOnce>
                                    <HowItWorkCard item={item} />
                                </Fade>
                            </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </section>);}