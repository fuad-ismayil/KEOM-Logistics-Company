"use client";

import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel, PopoverGroup, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menus = [
    { name: "Home", sub: [{ n: "Home Page Main", h: "/" }, { n: "Home Hero Slider", h: "/home/slider" }, { n: "Home Hero Video", h: "/home/video" }] },
    { name: "About Us", h: "/about" },
    { name: "Services", sub: [{ n: "Services", h: "/services" }, { n: "Services Details", h: "/services/details" }] },
    { name: "Pages", sub: [{ n: "Gallery", h: "/gallery" }, { n: "Pricing", h: "/pricing" }, { n: "Team", h: "/team" }, { n: "FAQ", h: "/faq" }] },
    { name: "Blog", sub: [{ n: "Blog", h: "/blog" }, { n: "Blog Details", h: "/blog/details" }] },
    { name: "Contact Us", h: "/contact" },
  ];
  const toggleMobileMenu = () => { setMobileMenuOpen(!mobileMenuOpen); };
  return (
    <header className="flex w-full justify-between items-center pt-[30px] lg:pt-[33px] px-[24px] lg:px-[7.4%] z-50 absolute top-0 left-0">
      <div className="flex w-full items-center gap-[30px]">
        <Link href="/" className="w-[43%] md:w-[20%] lg:w-[12.9%]">
          <img src="/images/header/logo.png" alt="logo" className="w-full" />
        </Link>
        <PopoverGroup className="hidden lg:flex text-[14px] font-bold gap-[34px] px-[40px] text-white">
          {menus.map((m) => m.sub ? <DesktopMenu key={m.name} item={m} /> : <Link key={m.name} href={m.h!} className="hover:text-[#FF7D44] transition-colors">{m.name}</Link>)}
        </PopoverGroup>
      </div>
      <Link href="/contact" className="hidden lg:flex text-[14px] bg-[#ff7d44] py-[17px] font-bold w-[12.5%] items-center justify-center text-white">GET A QUOTE</Link>
      <button className="lg:hidden text-white text-[30px] z-[60] relative focus:outline-none" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full px-[30px] pb-[33px] lg:hidden flex flex-col">
          <div className="bg-white w-full flex flex-col mt-5">
            {menus.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-none">
                {item.sub ? (<Disclosure>
                  {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between px-5 py-4 text-[18px] font-bold text-[#333] uppercase tracking-wide">
                          {item.name}
                          {open ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
                        </DisclosureButton>
                        <DisclosurePanel className="pb-4 pt-0 flex flex-col gap-3 transition duration-300">
                          {item.sub.map((subItem: any) => (
                            <Link key={subItem.n} href={subItem.h} className="text-[18px] text-[#333] uppercase pl-[10%] py-[10px] border-t-[2px] border-[#e6e6e6] opacity-75" onClick={() => setMobileMenuOpen(false)}>
                              {subItem.n}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <Link href={item.h!} className="flex w-full items-center justify-between px-5 py-4 text-[18px] font-bold text-[#333] uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 
function DesktopMenu({ item }: { item: any }) {
  const btn = useRef<HTMLButtonElement>(null), timer = useRef<any>(null);
  const hover = (open: boolean, close: () => void, enter: boolean) => {
    if (timer.current) clearTimeout(timer.current);
    if (enter && !open) btn.current?.click();
    if (!enter) timer.current = setTimeout(() => close(), 200);
  };
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <div onMouseEnter={() => hover(open, close, true)} onMouseLeave={() => hover(open, close, false)} className="flex">
          <PopoverButton ref={btn} className="focus:outline-none data-[open]:text-[#FF7D44] hover:text-[#FF7D44] transition-colors">{item.name}</PopoverButton>
          <PopoverPanel anchor="bottom start" transition className="z-50 w-[220px] bg-white shadow-lg border-t-[4px] border-[#FF7D44] divide-y divide-gray-100 [--anchor-gap:12px] transition duration-200 ease-out data-[closed]:translate-y-2 data-[closed]:opacity-0" onMouseEnter={() => hover(open, close, true)} onMouseLeave={() => hover(open, close, false)}>
            <div className="py-1">
              {item.sub.map((s: any) => <Link key={s.h} href={s.h} onClick={() => close()} className="block px-5 py-3 text-sm font-medium text-gray-700 hover:text-[#FF7D44] transition">{s.n}</Link>)}
            </div>
          </PopoverPanel>
        </div>
      )}
    </Popover>
  );
}