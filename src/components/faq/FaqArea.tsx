"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import { useId, useRef, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import WavyText from "@/components/ui/WavyText";
type FaqItem = { question: string; answer: string; };
const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I specify a delivery date when ordering?",
    answer: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    question: "What payment methods are supported?",
    answer: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    question: "How to divide a widget area section Into columns?",
    answer: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },
  {
    question: "What are the delivery types you offer?",
    answer: "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.",
  },];
function ChevronLeft({ className }: { className?: string }) { return <BsChevronLeft className={className} />; }
function SmoothAccordionContent({
  children,
  value,
  currentValue, }: {
    children: React.ReactNode;
    value: string;
    currentValue: string;
  }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const isOpen = value === currentValue;
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? contentHeight : 0);
    }
  }, [isOpen]);
  return (
    <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ height: `${height}px` }}>
      <div ref={contentRef}>{children}</div>
    </div>);
}
export default function FaqArea() {
  const uid = useId();
  const [openItem, setOpenItem] = useState<string>("item-0");
  return (
    <section className="relative overflow-hidden bg-white pt-[120px] pb-[60px]">
      <div className="mx-auto w-full max-w-[1320px] px-[12px]">
        <div className="grid items-center gap-y-[44px] lg:grid-cols-[5fr_7fr] lg:gap-x-[60px]">
          <div className="flex justify-center lg:justify-start">
            <div className="w-[85%] lg:w-[500px]">
              <Slide direction="left" triggerOnce duration={1300}>
                <Image src="/images/faq/about_img_01.jpg" alt="FAQ" width={500} height={600} priority sizes="(min-width: 1024px) 500px, 85vw" className="h-auto w-full object-cover" />
              </Slide>
            </div>
          </div>
          <div className="lg:pl-[30px] leading-[1.2]">
            <WavyText className=" text-left text-[40px] font-[700] text-[#003B49] md:text-[56px] lg:text-[60px]" text="Frequently Asked" />
            <WavyText className="block text-[#003B49]/40 text-left md:text-[56px] lg:text-[60px] font-[700] mb-[50px]" text="Questions" delay={0.2} />
            <Accordion.Root type="single" collapsible value={openItem} onValueChange={(value) => setOpenItem(value || "")} className="w-full max-w-[690px]">
              {FAQ_ITEMS.map((item, i) => (
                <Accordion.Item key={item.question} value={`item-${i}`} className="mb-[15px] overflow-hidden rounded-[4px] bg-white shadow-[2.5px_4.33px_15px_0px_rgba(0,0,0,0.09)] last:mb-0">
                  <Accordion.Header className="m-0">
                    <Accordion.Trigger className={["relative w-full bg-[#fff] px-[30px] py-[20px] pr-[75px]", "text-left text-[17px] font-[700] text-[#003B49] outline-none", "[&[data-state=open]_.faqChevron]:rotate-[-90deg]",].join(" ")} id={`${uid}-trigger-${i}`}>
                      {item.question}
                      <span className="absolute right-0 top-0 flex h-[61px] w-[61px] items-center justify-center bg-[#FF7D44] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.10)]">
                        <ChevronLeft className="faqChevron text-white transition-transform duration-300 ease-in-out" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <SmoothAccordionContent value={`item-${i}`} currentValue={openItem}>
                    <div className="px-[30px] py-[25px] text-[16px] leading-[26px] text-[#777777]">{item.answer}</div>
                  </SmoothAccordionContent>
                </Accordion.Item>))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>);
}