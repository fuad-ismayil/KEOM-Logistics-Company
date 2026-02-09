// components/sections/ServicesArea.tsx
import Image from "next/image";
import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";

type ServiceItem = {
  titleLine1: string;
  titleLine2: string;
  imgSrc: string;
  href: string;
  alt: string;
};

const SERVICES: ServiceItem[] = [
  {
    titleLine1: "Sea Freight",
    titleLine2: "Transportation",
    imgSrc: "/images/services/services-img1.jpg",
    href: "/single-service",
    alt: "Sea Freight Transportation",
  },
  {
    titleLine1: "Road Freight",
    titleLine2: "Transportation",
    imgSrc: "/images/services/services-img2.jpg",
    href: "/single-service",
    alt: "Road Freight Transportation",
  },
  {
    titleLine1: "Air Freight",
    titleLine2: "Transportation",
    imgSrc: "/images/services/services-img3.jpg",
    href: "/single-service",
    alt: "Air Freight Transportation",
  },
  {
    titleLine1: "Warehousing",
    titleLine2: "Transportation",
    imgSrc: "/images/services/services-img4.jpg",
    href: "/single-service",
    alt: "Warehousing Transportation",
  },
  {
    titleLine1: "Supply Chain",
    titleLine2: "Transportation",
    imgSrc: "/images/services/services-img5.jpg",
    href: "/single-service",
    alt: "Supply Chain Transportation",
  },
  {
    titleLine1: "Packaging",
    titleLine2: "Transportation",
    imgSrc: "/images/services/services-img6.jpg",
    href: "/single-service",
    alt: "Packaging Transportation",
  },
];

export default function ServicesArea() {
  return (
    <section
      id="services-area2"
      className="relative overflow-hidden bg-white pt-[120px] pb-[90px]"
    >
      {/* 3*416 + 2*18 = 1284 */}
      <div className="mx-auto w-full max-w-[1284px]">
        {/* Tablet/phone: tek kolon (w-[85%] kartlar). PC: 3 kolon */}
        <div className="grid grid-cols-1 justify-items-center gap-y-[30px] lg:grid-cols-3 lg:gap-x-[32px]">
          {SERVICES.map((item) => (
            <div
              key={`${item.titleLine1}-${item.titleLine2}`}
              className="mx-auto w-[85%] bg-white lg:w-[416px]"
            >
              {/* Image: PC 416x270, tablet/phone w-[85%] (kart zaten 85% olduğu için full) */}
              <div className="relative w-full aspect-[416/270]">
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 416px, 85vw"
                />
              </div>

              <div className="relative flex h-[99px] items-center bg-white">
                <h3 className="m-0 border-l-[5px] border-l-[#FF7D44] pl-[30px] text-[24px] font-bold leading-[1.05] text-[#003B49]">
                  <Link href={item.href} className="no-underline hover:text-[#FF7D44] transition-all duration-300">
                    {item.titleLine1}
                    <br />
                    {item.titleLine2}
                  </Link>
                </h3>

                <Link
                  href={item.href}
                  aria-label={`${item.titleLine1} ${item.titleLine2}`}
                  className="absolute right-[30px] top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full border-2 hover:text-[#FF7D44] border-[rgba(119,119,119,0.49)] hover:border-[#FF7D44] transition-all duration-300 text-[#777777] no-underline"
                >
                  <RxDoubleArrowRight className="h-[20px] w-[20px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
