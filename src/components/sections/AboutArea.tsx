"use client";
import Image from "next/image";
import WavyText from "@/components/ui/WavyText";
import { useEffect, useRef, useState } from "react";
export default function AboutArea() {
  const mainImageRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const [mainImageVisible, setMainImageVisible] = useState(false);
  const [truckVisible, setTruckVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === mainImageRef.current) setMainImageVisible(true);
            if (entry.target === truckRef.current) setTruckVisible(true);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0 });
    if (mainImageRef.current) observer.observe(mainImageRef.current);
    if (truckRef.current) observer.observe(truckRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-16 px-4 lg:py-[120px] lg:px-[7.8%]">
      <div className="mx-auto w-full">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          <div className="relative flex justify-center lg:block">
            <div ref={mainImageRef} className={`relative overflow-hidden reveal-mask ${mainImageVisible ? "animate" : ""} w-[85vw] md:w-[87.5vw] lg:w-[500px] lg:h-[600px] max-w-[calc(100%-32px)] lg:max-w-none`}>
              <Image src="/images/about/aboutarea/about_img_01.jpg" alt="Shipping" width={500} height={600} priority sizes="(min-width: 1024px) 500px, (min-width: 768px) 87.5vw, 85vw" className="block w-full h-auto lg:h-full object-cover" />
              <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" target="_blank" rel="noreferrer" className="absolute right-[10px] top-[15px] lg:right-[20px] lg:top-[30px]" aria-label="Play video">
                <Image src="/images/about/aboutarea/play.png" alt="Play" width={220} height={220} className="object-contain w-[220px] h-[220px]" priority />
              </a>
            </div>
            <div className="absolute left-[-240px] bottom-[-30px] md:bottom-[200px] lg:left-[-250px] lg:bottom-[110px] max-w-[472px]">
              <div ref={truckRef} className={`reveal-mask ${truckVisible ? "animate" : ""}`}>
                <Image src="/images/about/aboutarea/truck.png" alt="Truck" width={472} height={190} className="h-auto block" priority />
              </div>
            </div>
          </div>
          <div className="lg:text-left lg:pl-[20px] flex flex-col">
            <h2 className="text-[40px] text-center lg:text-left lg:text-[60px] break-keep whitespace-normal leading-[1.2] font-[700]">
              <WavyText text="Shipping " className="text-[#9AA9AD]" /><WavyText text="service" className="text-[#9AA9AD]" delay={0.4} />
              <div>
                <WavyText text="around the" className="text-[#003b49]" />
                <WavyText text=" corners" className="text-[#003b49]" delay={0.4} />
              </div>
            </h2>
            <div className="mt-4 lg:mt-[22px] flex items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <span className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#FF7D44]">
                since from 1990
              </span>
              <span className="h-px flex-1 max-w-[200px] hidden lg:block lg:max-w-none bg-gradient-to-r from-[#F5F5F5] to-[#FF7D44]" />
            </div>
            <p className="mt-5 lg:mt-[26px] mx-auto lg:mx-0 max-w-[560px] text-[14px] lg:text-[16px] leading-[24px] lg:leading-[26px] text-[#777777]">
              Are you looking for a reliable partnership? Our advanced technological
              infrastructure, coupled with our team of seasoned professionals, makes
              us the ideal choice. We offer comprehensive solutions in supply chain
              management, warehousing, distribution, and transportation.
            </p>
            <p className="mt-3 lg:mt-[14px] mx-auto lg:mx-0 max-w-[560px] text-[14px] lg:text-[16px] leading-[24px] lg:leading-[26px] text-[#777777]">
              Our expertise ensures efficient and seamless operations, tailored to
              meet your specific needs and drive your business forward.
            </p>
            <div className="mt-6 lg:mt-[30px]">
              <a href="/about" className="inline-flex h-[50px] w-[190px] items-center justify-center bg-[#FF7D44] text-[13px] font-bold uppercase text-white transition hover:brightness-95">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}