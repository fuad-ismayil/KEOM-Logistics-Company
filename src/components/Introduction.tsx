"use client";

import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export default function Introduction() {
    const inputContainer = "py-[20px] px-[30px] lg:px-6";
    const fieldWrapper = "flex items-center border-b border-white/20 pb-3 focus-within:border-white transition-colors duration-300";
    const inputBase = "flex-1 bg-transparent text-white text-[15px] outline-none placeholder-gray-400 font-normal appearance-none cursor-pointer";
    return (
        <section className="introduction min-h-screen bg-fixed -z-10 flex w-full flex-col bg-[url('/images/introduction/bg.jpg')] bg-cover bg-center px-[24px] lg:px-[10.5%]" >
            <div className="flex pt-[360px] lg:pt-[330px] w-[70%] items-center gap-[10px] mb-[50px]">
                <div className="h-[100px] lg:h-[50px] w-[2px] bg-[#ff7d44]" />
                <h5 className="text-[16px] leading-[26px] lg:text-[16px] font-normal text-[#fff] pl-[7px]">Air Freight Terminals & Facilities Are Subject <br /> To Strict Security Measures.</h5></div>
            <h2 className="text-[34px] leading-[1.2] lg:text-[80px] font-bold text-[#fff]">International <br /><span className="text-[#ddd] opacity-35"> Container Shipping</span></h2>
            <div className="lg:w-[58%] flex bg-[#ffffff0f] mt-[50px] mb-[120px]">
                <form className="w-full grid grid-cols-1 lg:grid-cols-3">
                    <div className={`${inputContainer} pl-[30px]`}>
                        <div className={fieldWrapper}>
                            <input type="text" placeholder="Shipment id" required className={`${inputBase} cursor-text`} />
                            {/* FIXED: Added 'shrink-0' to prevent squashing on PC, and ensured strokeWidth is 1.5 */}
                            <Globe className="text-white opacity-90 pointer-events-none shrink-0" size={20} strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className={inputContainer}>
                        <div className={fieldWrapper}>
                            <select className={inputBase}>
                                <option value="" className="text-black">Delivery</option>
                                <option value="1" className="text-black">Delivery1</option>
                                <option value="2" className="text-black">Delivery2</option>
                                <option value="3" className="text-black">Delivery3</option>
                                <option value="4" className="text-black">Delivery4</option>
                                <option value="5" className="text-black">Delivery5</option>
                            </select>
                            {/* Added shrink-0 here too for safety */}
                            <ChevronDown className="text-white opacity-90 pointer-events-none shrink-0" size={16} strokeWidth={2} />
                        </div>
                    </div>

                    <div className="p-[42px] pb-[30px] lg:p-0 lg:h-full">
                        <button type="submit" className="w-full h-[74px] lg:h-full bg-white text-[#003B49] text-[14px] font-[600] tracking-wider hover:bg-[#ff7d44] hover:text-white transition cursor-pointer duration-400">
                            TRACK SHIPMENT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}