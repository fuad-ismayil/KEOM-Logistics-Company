"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import WavyText from "@/components/ui/WavyText";
const POSTS = [
  { image: "/images/blogarea/inner_b3.jpg", date: "24th March 2025", title: "Seas accumsan nulla nec lacus ultricies placerat.", category: "TRANSPORT, FREIGHT", href: "/blog-details" },
  { image: "/images/blogarea/inner_b2.jpg", date: "24th March 2025", title: "Dras accumsan nulla nec lacus ultricies placerat.", category: "TRANSPORT, FREIGHT", href: "/blog-details" },
  { image: "/images/blogarea/inner_b1.jpg", date: "24th March 2025", title: "It’s hard to wear a beret without feeling fashion paris.", category: "TRANSPORT, FREIGHT", href: "/blog-details" }];
const SLIDES = [...POSTS, ...POSTS, ...POSTS];
export default function BlogArea() {
  const swiperRef = useRef<SwiperType | null>(null);
  const btnCls = "grid h-[40px] w-[40px] place-items-center rounded-full border border-white/15 bg-transparent shadow-[2.5px_4.33px_15px_0_rgba(0,0,0,0.07)] transition-colors duration-200 hover:border-white/25 hover:bg-[#ff6f32] focus:bg-[#FF7D44] focus:border-transparent active:bg-[#FF7D44]";
  return (
    <section id="blog" className="relative overflow-hidden bg-[#003B49] pt-[120px] pb-[90px]">
      <div className="mx-auto w-full max-w-[1320px] px-[12px]">
        <div className="relative mb-[80px]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold text-white leading-[1.2] text-center lg:text-start">
                <span className="block text-[40px] lg:text-[60px] opacity-40"><WavyText text="Company" /></span>
                <span className="block text-[40px] lg:text-[60px]"><WavyText text="news &amp; insights" delay={0.2} /></span>
              </h2>
              <div className="mt-[22px] flex gap-[18px]">
                <div className="text-[14px] font-bold uppercase text-[#FF7D44]">how it works</div>
                <div className="h-px hidden lg:block flex-1"><img src="/images/blogarea/line.svg" alt="" /></div>
              </div>
            </div>
            <div className="mt-[52px] hidden lg:flex items-center gap-[10px]">
              <button type="button" aria-label="Previous" onClick={() => swiperRef.current?.slidePrev()} className={btnCls}>
                <FaArrowLeftLong className="h-[16px] w-[16px] text-white/70" />
              </button>
              <button type="button" aria-label="Next" onClick={() => swiperRef.current?.slideNext()} className={btnCls}>
                <FaArrowRightLong className="h-[16px] w-[16px] text-white/70" />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          loop speed={750} slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 22 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}>
          {SLIDES.map((post, idx) => (
            <SwiperSlide key={`${post.title}-${idx}`}>
              <article className="mx-auto w-[336px] md:w-[318px] lg:w-[410px]">
                <Link href={post.href} className="group block overflow-hidden" aria-label={post.title}>
                  <div className="relative h-[228px] w-full md:h-[215px] lg:h-[278px]">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width: 767px) 336px, (max-width: 1023px) 318px, 410px" priority={idx < 3} />
                  </div>
                </Link>
                <div className="relative float-left pb-[30px] pt-[40px]">
                  <div className="mb-[20px] text-[14px] font-bold text-white/60">{post.date}</div>
                  <h4 className="mb-[15px] text-[26px] font-bold leading-[36px] text-white">
                    <Link href={post.href} className="no-underline">{post.title}</Link>
                  </h4>
                  <div className="mt-[50px] text-[14px] font-bold uppercase leading-[100%] text-[#FF7D44]">{post.category}</div>
                </div>
              </article>
            </SwiperSlide>))}
        </Swiper>
      </div>
    </section>);
}