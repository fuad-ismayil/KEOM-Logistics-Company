"use client";
import BrandArea from "./BrandArea";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import WavyText from "./WavyText";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
const TESTIMONIALS: Testimonial[] = [
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Eliana M. Thompson", avatarSrc: "/images/testimonial/testi_avatar.png" },
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Penelope N. Harris", avatarSrc: "/images/testimonial/testi_avatar_02.png" },
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Amelia K. Hamilton", avatarSrc: "/images/testimonial/testi_avatar_03.png" },
  { text: "“ I have been using them for a year now. Everything is detailed & well organized and, of course, damn beautiful. ”", name: "Eliana M. Thompson", avatarSrc: "/images/testimonial/testi_avatar.png" },];
export default function TestimonialArea() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [animateIdxs, setAnimateIdxs] = useState<number[]>([]);
  const [ready, setReady] = useState(false);
  const [playedOnce, setPlayedOnce] = useState(false);
  const [inView, setInView] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const animateSet = useMemo(() => new Set(animateIdxs), [animateIdxs]);
  useEffect(() => {
    if (!sectionRef.current) return;
    let timeoutId: number | null = null;
    const ob = new IntersectionObserver((entries) => {for (const e of entries) {if (e.isIntersecting && !triggered) {timeoutId = window.setTimeout(() => {setInView(true);setTriggered(true);ob.disconnect();}, 500);break;}}},{ threshold: 0.15 });ob.observe(sectionRef.current);
    return () => {ob.disconnect(); if (timeoutId) clearTimeout(timeoutId);};}, [triggered]);

  useEffect(() => {if (!inView || playedOnce || !swiperRef.current) return;
    const swiper = swiperRef.current;
    swiper.update();
    const spv =
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : swiper.slidesPerViewDynamic?.() || 3;
    const start = swiper.activeIndex ?? 0;
    const end = start + spv;
    const visible = new Set<number>();
    for (let i = start; i < end; i++) {
      const el = swiper.slides[i] as HTMLElement | undefined;
      if (!el) continue;
      const real = el.getAttribute("data-swiper-slide-index");
      const realIdx = real ? Number(real) : i;
      if (!Number.isNaN(realIdx)) visible.add(realIdx);}
    setAnimateIdxs([...visible]);
    setPlayedOnce(true);
    window.setTimeout(() => setAnimateIdxs([]), 750);
    window.requestAnimationFrame(() => setReady(true));
  }, [inView, playedOnce]);
  return (
    <section ref={(el) => {sectionRef.current = el;}} className="relative overflow-hidden bg-[#F5F5F5] bg-[url('/images/testimonial/feedback-bg.png')] bg-center bg-no-repeat pt-[120px] pb-[120px]" aria-label="Testimonials">
      <div className="container relative z-[1] mx-auto px-4">
        <div className="mb-[80px] text-center lg:text-start lg:px-[7%]">
          <h2 className="leading-[1.2]">
            <span className="block text-[40px] font-semibold text-[#93abb0] lg:text-[60px]">
              <WavyText text="Company" className="text-[#93abb0]" />
            </span>
            <span className="block text-[40px] font-semibold text-[#003c49] lg:text-[60px]">
              <WavyText text="happy users " className="text-[#003c49]" delay={0.2} />
              <WavyText text="feedback" className="text-[#003c49]" delay={0.4} />
            </span>
          </h2>
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
            <span className="text-[14px] font-[700] uppercase text-[#FF7D44]">testimonials</span>
            <div className="h-px hidden lg:block flex-1 bg-gradient-to-r from-[#F5F5F5] to-[#FF7D44]" />
          </div>
        </div>
        <div className={`mx-[15px] lg:mx-[7%] transition-opacity duration-200 ${ready ? "opacity-100" : "opacity-0"}`}>
          <Swiper
            modules={[Autoplay]}
            loop
            speed={900}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="px-[15px]"
            onSwiper={(swiper) => {swiperRef.current = swiper;}}>
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={`${t.name}-${idx}`} className="h-auto">
                <TestimonialCard item={t} shouldAnimate={animateSet.has(idx)} />
              </SwiperSlide>))}
          </Swiper>
        </div>
        <BrandArea />
      </div>
    </section>);}