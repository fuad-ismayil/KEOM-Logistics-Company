
"use client";
import Introduction from "@/components/Introduction";
import FreightServices from "@/components/FreightServices";
import AboutArea from "@/components/AboutArea";
import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Introduction />
      <FreightServices />
      <AboutArea />
      <ScrollToTop smooth style={{ borderRadius: "50%", backgroundColor: "#FF7D44", display: "flex", bottom: "77px", right: "50px", alignItems: "center", justifyContent: "center", width: "45px", height: "45px" }} component={<FaLevelUpAlt style={{ color: "#fff", fontSize: "22px", backgroundColor: "#FF7D44", }} />} />   </>
  );
}
