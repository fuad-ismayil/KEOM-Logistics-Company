"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export type ServiceCardProps = {
  id: string;
  iconSrc: string;
  style: string;
  title: string;
  href: string;
  description: string;
};

export default function ServiceCard({
  id,
  iconSrc,
  style,
  title,
  href,
  description,
}: ServiceCardProps) {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div
      className={style}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-offset="80"
    >
      <div className="relative inline-block">
        <Image
          src={iconSrc}
          alt={id}
          width={84}
          height={84}
          className="h-[84px] w-[84px] object-contain"
        />
      </div>

      <h3 className="mt-[25px] text-[26px] font-semibold leading-tight text-[#0b3a43]">
        <Link href={href} className="transition-colors hover:text-[#FF7D44]">
          {title}
        </Link>
      </h3>

      <p className="mt-[15px] max-w-[360px] text-[16px] leading-[26px] font-normal text-[#7a7a7a]">
        {description}
      </p>
    </div>
  );
}
