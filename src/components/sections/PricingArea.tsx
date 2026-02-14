"use client";
import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import WavyText from "@/components/ui/WavyText";
import { AnimatePresence, motion } from "framer-motion";
type PricingItem = { title: string; price: string; leftBullets: string[]; rightBullets: string[]; };
const ITEMS: PricingItem[] = [
    {
        title: "Road Freight",
        price: "$199",
        leftBullets: [
            "Cost: $500 per shipment",
            "Weight Limit: Up to 1,000 lbs",
            "Volume Limit: Up to 10 cubic meters",
            "Door-to-door delivery",
            "Basic insurance coverage",],
        rightBullets: ["Online shipment tracking", "Customer support"],
    },
    {
        title: "Ship Freight",
        price: "$299",
        leftBullets: [
            "Cost: $500 per shipment",
            "Weight Limit: Up to 1,000 lbs",
            "Volume Limit: Up to 10 cubic meters",
            "Door-to-door delivery",
            "Basic insurance coverage",],
        rightBullets: ["Online shipment tracking", "Customer support"],
    },
    {
        title: "Airplane Freight",
        price: "$399",
        leftBullets: [
            "Cost: $500 per shipment",
            "Weight Limit: Up to 1,000 lbs",
            "Volume Limit: Up to 10 cubic meters",
            "Door-to-door delivery",
            "Basic insurance coverage",],
        rightBullets: ["Online shipment tracking", "Customer support"],
    },];
function PlusCircle({ active }: { active: boolean }) {
    return (
        <span className={["grid h-[40px] w-[40px] place-items-center rounded-full", active ? "border border-[#ff7d44] bg-transparent" : "bg-[#c4d2d5]",].join(" ")} aria-hidden="true">
            <span className="relative block h-[12px] w-[12px]">
                <span className={["absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2", active ? "bg-[#ff7d44]" : "bg-[#0a3b44]",].join(" ")} />
                <span className={["absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2", active ? "bg-[#ff7d44]" : "bg-[#0a3b44]",].join(" ")} />
            </span>
        </span>);
}
function CheckBullet({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-[14px] text-[20px] leading-[28px] text-[#0a3b44]">
            <CiCircleCheck size={30} color="#ff7d44" className="text-[25px]" />
            <span>{text}</span>
        </li>);
}
export default function PricingArea() {
    const uid = useId();
    const [openIndex, setOpenIndex] = useState<number>(1);
    return (
        <section id="pricing" className="relative overflow-hidden bg-white pt-[120px] pb-[60px]">
            <div className="w-full px-[24px] lg:px-[120px]">
                <div className="mb-[80px] text-center">
                    <h2 className="mb-[25px] text-[40px] font-[800] leading-[1.2] text-[#003B49] lg:text-[60px]">
                        <WavyText text="Company" className="text-[#99b1b6]" /> <br />
                        <WavyText text="price and plans" delay={0.2} />
                    </h2>
                    <div className="mx-auto flex max-w-[820px] items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-white to-[#FF7D44]" />
                        <span className="text-[14px] font-[700] uppercase tracking-[0.14em] text-[#FF7D44]">our team</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-white to-[#FF7D44]" />
                    </div>
                </div>
                <div>
                    {ITEMS.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        const panelId = `${uid}-panel-${idx}`;
                        const buttonId = `${uid}-button-${idx}`;
                        return (
                            <div key={item.title}>
                                <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))} className="flex w-full items-center justify-between py-[26px] text-left">
                                    <span className={["font-[800] text-[#0a3b44]", isOpen ? "text-[32px] leading-[1.05]" : "text-[28px] leading-[1.1]",].join(" ")}>
                                        {item.title}
                                    </span>
                                    <PlusCircle active={isOpen} />
                                </button>
                                <div className={isOpen ? "h-[2px] bg-[#8aa6ae]" : "h-px bg-[#e9eff2]"} />
                                <div id={panelId} role="region" aria-labelledby={buttonId} className={["grid transition-[grid-template-rows,opacity] duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",].join(" ")}>
                                    <div className="overflow-hidden">
                                        <div className="pt-[26px] pb-[44px]">
                                            <div className={["grid items-stretch gap-y-[28px]", "lg:grid-cols-[408px_360px_1fr] lg:gap-x-[50px]",].join(" ")}>
                                                <div className="min-w-0">
                                                    <AnimatePresence mode="wait">
                                                        {isOpen && (
                                                            <motion.div key={`pricing-img-${idx}-${openIndex}`} className="relative aspect-square w-full max-w-[408px] justify-self-center overflow-hidden lg:justify-self-start" initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} exit={{ clipPath: "inset(0 100% 0 0)" }} transition={{ duration: 0.7, ease: "easeOut" }}>
                                                                <Image src="/images/pricingarea/price-img-01.png" alt="pricing" fill className="object-cover" priority={idx === 1} sizes="(min-width: 1024px) 408px, 90vw" />
                                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                                                    <div className="text-[10px] font-[800] uppercase tracking-[0.18em]">START FROM</div>
                                                                    <div className="mt-[10px] text-[64px] font-[900] leading-[1]">{item.price}</div>
                                                                </div>
                                                            </motion.div>)}
                                                    </AnimatePresence>
                                                </div>
                                                <div className="min-w-0 pt-[6px] lg:self-center">
                                                    <ul className="m-0 list-none space-y-[14px] p-0">{item.leftBullets.map((b) => (<CheckBullet key={b} text={b} />))}</ul>
                                                </div>
                                                <div className="min-w-0 pt-[6px] lg:self-center">
                                                    <ul className="m-0 list-none space-y-[16px] p-0">{item.rightBullets.map((b) => (<CheckBullet key={b} text={b} />))}</ul>
                                                    <div className="mt-[26px]">
                                                        <Link href="/contact" className="inline-flex h-[54px] w-full max-w-[390px] items-center justify-center bg-[#0a3b44] text-[16px] font-[800] uppercase tracking-[0.14em] text-white">PURCHASE NOW</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-[2px] bg-[#8aa6ae]" />
                                    </div>
                                </div>
                            </div>);
                    })}
                </div>
            </div>
        </section>);
}