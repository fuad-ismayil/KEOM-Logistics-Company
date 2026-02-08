"use client";
import Introduction from "@/components/Introduction";
import FreightServices from "@/components/FreightServices";
import AboutArea from "@/components/AboutArea";
import GalleryArea from "@/components/GalleryArea";
import TestimonialArea from "@/components/TestimonialArea";
import HowItWorks from "@/components/HowItWorks";
import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";
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
      <ScrollToTop smooth style={{ borderRadius: "50%", backgroundColor: "#FF7D44", display: "flex", bottom: "77px", right: "50px", alignItems: "center", justifyContent: "center", width: "45px", height: "45px" }} component={<FaLevelUpAlt style={{ color: "#fff", fontSize: "22px", backgroundColor: "#FF7D44", }} />} />
    </>);
}