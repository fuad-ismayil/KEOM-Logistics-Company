"use client";
import Image from "next/image";
import { useMemo, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import WavyText from "./WavyText";
import GalleryCard, { GalleryItem } from "./GalleryCard";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
const DEFAULT_ITEMS: GalleryItem[] = [
    { imageSrc: "/images/gallery/gallery-01.jpg", iconSrc: "/images/gallery/aol.png", tag: "transport", title: "Aoliox office thing transport", },
    { imageSrc: "/images/gallery/gallery-02.jpg", iconSrc: "/images/gallery/cnn.png", tag: "shipping", title: "CNN hard thing air transport", },
    { imageSrc: "/images/gallery/gallery-03.jpg", iconSrc: "/images/gallery/crown.png", tag: "freight", title: "King Co. thing transport", },
    { imageSrc: "/images/gallery/services-img1.jpg", iconSrc: "/images/gallery/cnn.png", tag: "transport", title: "Aoliox office thing transport", },
    { imageSrc: "/images/gallery/services-img3.jpg", iconSrc: "/images/gallery/crown.png", tag: "transport", title: "Aoliox office thing transport", },
    { imageSrc: "/images/gallery/services-img5.jpg", iconSrc: "/images/gallery/cnn.png", tag: "transport", title: "Aoliox office thing transport", },
];
export default function GalleryArea({ items = DEFAULT_ITEMS, phoneLabel = "+(123) 456 789 00", phoneHref = "tel:+12345678900", }: { items?: GalleryItem[]; phoneLabel?: string; phoneHref?: string; }) {
    const [active, setActive] = useState(0);
    const list = useMemo(() => items, [items]);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [previewIndex, setPreviewIndex] = useState(0);
    const openPreview = (index: number) => { setPreviewIndex(index); setIsPreviewOpen(true); };
    const closePreview = () => setIsPreviewOpen(false);
    const goPrev = useCallback(() => { setPreviewIndex((i) => (i - 1 + list.length) % list.length); }, [list.length]);
    const goNext = useCallback(() => { setPreviewIndex((i) => (i + 1) % list.length); }, [list.length]);
    useEffect(() => { if (!isPreviewOpen) return; const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") closePreview(); if (e.key === "ArrowLeft") goPrev(); if (e.key === "ArrowRight") goNext(); }; document.addEventListener("keydown", onKeyDown); const prevOverflow = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = prevOverflow; }; }, [isPreviewOpen, goPrev, goNext]);
    const current = list[previewIndex];
    return (
        <section className="overflow-hidden bg-white py-[120px]">
            <div className="mx-auto w-full max-w-[1320px] px-4">
                <div className="mb-[80px] text-center">
                    <h2 className="text-[40px] lg:text-[60px] font-[700] leading-[1.2] text-[#99b1b6]"><WavyText text="Company" /></h2>
                    <div className="mt-2 text-[40px] font-[700] leading-[1.2] text-[#003b49] lg:text-[60px]"><WavyText text="success case" delay={0.2} /><WavyText text=" study" delay={0.4} /></div>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <div className="h-px w-[160px] hidden lg:block bg-gradient-to-r from-white to-[#FF7D44] md:w-[280px]" />
                        <span className="text-[14px] uppercase font-[700] text-[#FF7D44]">portfolio</span>
                        <div className="h-px w-[160px] hidden lg:block bg-gradient-to-l from-white to-[#FF7D44] md:w-[280px]" />
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full max-w-[1320px] px-4">
                <div className="relative mx-auto sm:-mx-[45px] lg:mr-[-620px] lg:ml-[-45px]">
                    <Swiper modules={[Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false }} loop centeredSlides={true} spaceBetween={30} slidesPerView={3} onSlideChange={(s) => setActive(s.realIndex)} breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 18 }, 640: { slidesPerView: 2.05, spaceBetween: 22 }, 1024: { slidesPerView: 3, spaceBetween: 30 }, }} className="!overflow-visible">
                        {list.map((item, idx) => (<SwiperSlide key={`${item.imageSrc}-${idx}`}><GalleryCard item={item} onClick={() => openPreview(idx)} priority={idx < 3} /></SwiperSlide>))}</Swiper>
                </div>
                <div className="mt-10">
                    <div className="bg-[#FBE6E6] py-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                        call us for your next shipment.{" "}
                        <a className="text-[#FF7D44]" href={phoneHref}>{phoneLabel}</a>
                    </div>
                </div>
            </div>
            {isPreviewOpen && current && (
                <div className="fixed inset-0 z-[9999] bg-black/70" onClick={closePreview}>
                    <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-white opacity-70 hover:opacity-100"><BiSolidLeftArrow className="h-9 w-9" /></button>
                    <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-white opacity-70 hover:opacity-100"><BiSolidRightArrow className="h-9 w-9" /></button>
                    <div className="flex h-full items-center justify-center p-4">
                        <div className="relative w-full max-w-[1100px] text-center" onClick={(e) => e.stopPropagation()}>
                            <div className="relative inline-block">
                                <button type="button" aria-label="Close" onClick={(e) => { e.stopPropagation(); closePreview(); }} className="absolute right-0 -top-10 z-20 h-9 w-9 flex items-center justify-center text-[28px] leading-none text-white/80 hover:text-white">×</button>
                                <Image src={current.imageSrc} alt={current.title} width={1600} height={900} className="block h-auto max-h-[80vh] w-auto max-w-full" priority />
                                <div className="absolute right-0 -bottom-6 text-xs text-white/70">{previewIndex + 1} of {list.length}</div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </section>);}