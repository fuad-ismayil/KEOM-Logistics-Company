"use client";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel, PopoverGroup, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";
const menus = [
  { name: "Home", h: "/", sub: [{ n: "Home Page Main", h: "/" }, { n: "Home Hero Slider", h: "/home/slider" }, { n: "Home Hero Video", h: "/home/video" }] },
  { name: "About Us", h: "/about" },
  { name: "Services", h: "/services", sub: [{ n: "Services", h: "/services" }, { n: "Services Details", h: "/services/details" }] },
  { name: "Pages", sub: [{ n: "Gallery", h: "/gallery" }, { n: "Pricing", h: "/pricing" }, { n: "Team", h: "/team" }, { n: "FAQ", h: "/faq" }] },
  { name: "Blog", sub: [{ n: "Blog", h: "/blog" }, { n: "Blog Details", h: "/blog/details" }] },
  { name: "Contact Us", h: "/contact" },];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`flex w-full justify-between items-center px-[24px] lg:px-[7.4%] z-50 left-0 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-[#003B49] py-[20px] lg:py-1.5" : "absolute top-0 pt-[30px] lg:pt-[33px]"}`}>
      <div className="flex w-full items-center gap-[30px]">
        <Link href="/" className="w-[43%] md:w-[20%] lg:w-[12.9%]">
          <img src="/images/header/logo.png" alt="logo" className="w-full" />
        </Link>
        <PopoverGroup className="hidden lg:flex text-[14px] font-bold gap-[34px] px-[40px] text-white">
          {menus.map((m) => m.sub ? <DesktopMenu key={m.name} item={m} /> :
            <Link key={m.name} href={m.h!} className="hover:text-[#FF7D44] transition-colors">{m.name}</Link>)}
        </PopoverGroup>
      </div>
      <Link href="/contact" className="hidden lg:flex text-[14px] bg-[#ff7d44] py-[17px] font-bold w-[12.5%] items-center justify-center text-white">
        GET A QUOTE
      </Link>
      <button className="lg:hidden text-white text-[30px] z-[60]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`absolute top-full left-0 w-full px-[30px] pb-[33px] lg:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="bg-white flex flex-col mt-5 shadow-xl">
          {menus.map((item) => (
            <div key={item.name} className="border-b border-gray-100 last:border-none">
              {item.sub ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between px-[17px] py-[10px] text-[15px] font-bold text-[#333] uppercase">
                        {item.name} {open ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
                      </DisclosureButton>
                      <DisclosurePanel className="pb-4 flex flex-col">
                        {item.sub.map((s: any) => (<Link key={s.n} href={s.h} className="text-[15px] text-[#333] uppercase pl-[10%] py-[10px] border-t border-gray-100 opacity-75" onClick={() => setMobileMenuOpen(false)}>{s.n}</Link>))}
                      </DisclosurePanel>
                    </>)}
                </Disclosure>
              ) : (<Link href={item.h!} className="flex px-5 py-4 text-[15px] font-bold text-[#333] uppercase" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>)}
            </div>))}
        </div>
      </div>
    </header>);}
function DesktopMenu({ item }: { item: any }) {
  return (
    <Popover className="relative group">
      {item.h ? (<Link href={item.h} className="focus:outline-none hover:text-[#FF7D44] transition-colors outline-none block">{item.name}</Link>) : (<PopoverButton className="focus:outline-none hover:text-[#FF7D44] transition-colors outline-none">{item.name}</PopoverButton>)}
      <div className="absolute top-full hidden group-hover:block pt-3">
        <div className="w-[220px] bg-white shadow-lg border-t-[4px] border-[#FF7D44] py-1">
          {item.sub.map((s: any) => (<Link key={s.h} href={s.h} className="block px-5 py-3 text-sm font-medium text-gray-700 hover:text-[#FF7D44] transition">{s.n}</Link>))}
        </div>
      </div>
    </Popover>);}