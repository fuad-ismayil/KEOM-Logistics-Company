"use client";
import Introduction from "@/components/Introduction";
import FreightServices from "@/components/FreightServices";
import AboutArea from "@/components/AboutArea";
import GalleryArea from "@/components/GalleryArea";
import TestimonialArea from "@/components/TestimonialArea";
import HowItWorks from "@/components/HowItWorks";
import TeamArea from "@/components/TeamArea";
import BookingArea from "@/components/BookingArea";
import PricingArea from "@/components/PricingArea";
import BlogArea from "@/components/BlogArea";
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