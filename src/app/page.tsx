"use client";
import Introduction from "@/components/sections/Introduction";
import FreightServices from "@/components/sections/FreightServices";
import AboutArea from "@/components/sections/AboutArea";
import GalleryArea from "@/components/sections/GalleryArea";
import TestimonialArea from "@/components/sections/TestimonialArea";
import HowItWorks from "@/components/sections/HowItWorks";
import TeamArea from "@/components/sections/TeamArea";
import BookingArea from "@/components/sections/BookingArea";
import PricingArea from "@/components/sections/PricingArea";
import BlogArea from "@/components/blog/BlogArea";
export default function Home() {
  return (
    <>
      <Introduction />
      <FreightServices />
      <AboutArea />
      <GalleryArea />
      <TestimonialArea />
      <HowItWorks />
      <TeamArea />
      <BookingArea />
      <PricingArea />
      <BlogArea />
    </>);
}