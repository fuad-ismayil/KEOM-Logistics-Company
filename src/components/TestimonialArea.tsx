"use client";
import Image from "next/image";
import BrandArea from "./BrandArea";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import WavyText from "./WavyText";
type Testimonial = { text: string; name: string; avatarSrc: string; };
const TESTIMONIALS: Testimonial[] = [
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Eliana M. Thompson", avatarSrc: "/images/testimonial/testi_avatar.png", },
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Penelope N. Harris", avatarSrc: "/images/testimonial/testi_avatar_02.png", },
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Amelia K. Hamilton", avatarSrc: "/images/testimonial/testi_avatar_03.png", },
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Eliana M. Thompson", avatarSrc: "/images/testimonial/testi_avatar.png", },];
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="h-full bg-white px-8 py-10 shadow-sm">
      <div className="mb-6">
        <Image src="/images/testimonial/qt-icon.png" alt="Quote" width={44} height={44} className="h-auto w-auto" />
      </div>
      <p className="mb-8 text-[15px] leading-[26px] text-[#6f6f6f]">{item.text}</p>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h6 className="text-[15px] font-semibold text-[#0B2C3D]">{item.name}</h6>
          <div className="mt-2">
            <Image src="/images/testimonial/review-icon.png" alt="Reviews" width={90} height={18} className="h-auto w-auto" />
          </div>
        </div>
        <div className="shrink-0">
          <Image src={item.avatarSrc} alt={item.name} width={44} height={44} className="h-[44px] w-[44px] rounded-sm object-cover" />
        </div>
      </div>
    </div>);}
export default function TestimonialArea() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] bg-[url('/images/testimonial/feedback-bg.png')] bg-center bg-no-repeat pt-[120px] pb-[120px]" aria-label="Testimonials">
      <div className="container relative z-[1] mx-auto px-4">
        <div className="mb-[80px] text-center lg:text-start lg:px-[7%]">
          <h2 className="leading-[1.2]">
            <span className="block text-[40px] font-semibold text-[#93abb0] lg:text-[60px]">
              <WavyText text="Company" className="text-[#93abb0]" />
            </span>
            <span className="block text-[40px] font-semibold text-[#003c49] lg:text-[60px]">
              <WavyText text="happy users " className="text-[#003c49]" delay={0.2} /><WavyText text="feedback" className="text-[#003c49]" delay={0.4} />
            </span>
          </h2>
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
            <span className="text-[14px] font-[700] uppercase text-[#FF7D44]">
              testimonials
            </span>
            <div className="h-px hidden lg:block flex-1 bg-gradient-to-r from-[#F5F5F5] to-[#FF7D44]" />
          </div>
        </div>
        <div className="mx-[15px] lg:mx-[7%]">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={900}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, }}
            className="px-[15px]">
            {TESTIMONIALS.map((t, idx) => (<SwiperSlide key={`${t.name}-${idx}`} className="h-auto"><TestimonialCard item={t} /></SwiperSlide>))}
          </Swiper>
        </div>
        <BrandArea />
      </div>
    </section>);}