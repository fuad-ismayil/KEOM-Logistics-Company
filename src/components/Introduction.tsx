import { Globe, ChevronDown } from "lucide-react";
import WavyText from "./WavyText";
export default function Introduction() {
  const inputContainer = "py-[7px] mb-[25px] lg:mb-0 lg:py-[20px] lg:px-[30px] px-[12px]";
  const fieldWrapper = "flex items-center border-b border-white/20 pb-3 focus-within:border-white transition-colors duration-300";
  const inputBase = "flex-1 bg-transparent text-white text-[16px] outline-none placeholder-gray-400 font-normal appearance-none cursor-pointer";
  return (
    <section className="overflow-hidden introduction min-h-screen bg-scroll lg:bg-fixed -z-10 flex w-full flex-col bg-[url('/images/introduction/bg.jpg')] bg-cover bg-center px-[24px] lg:px-[10.5%]">
      <div className="flex pt-[360px] lg:pt-[330px] w-[70%] items-center gap-[10px] mb-[50px]">
        <div className="h-[100px] lg:h-[50px] w-[2px] bg-[#ff7d44]" />
        <h5 className="text-[16px] leading-[26px] lg:text-[16px] font-normal text-[#fff] pl-[7px]">
          Air Freight Terminals & Facilities Are Subject <br /> To Strict Security Measures.
        </h5>
      </div>
      <div className="flex flex-col gap-0 leading-[1.2]">
        <WavyText text="International" className="text-[34px] lg:text-[80px] font-bold text-[#fff]" />
        <WavyText text="Container Shipping" className="text-[34px] lg:text-[80px] font-bold text-[#ddd] opacity-35 p-0 m-0" delay={0.2} />
      </div>
      <div className="lg:w-[58%] flex bg-[#ffffff0f] mt-[50px] lg:mb-[120px] mb-[35px] p-[30px] lg:p-0">
        <form className="w-full grid grid-cols-1 lg:grid-cols-3">
          <div className={`${inputContainer} lg:pl-[30px]`}>
            <div className={`${fieldWrapper} relative`}>
              <input type="text" placeholder="Shipment id" required className={`${inputBase} pr-12 cursor-text`} />
              <Globe className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/90" size={20} strokeWidth={1.5} aria-hidden="true" />
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
              <ChevronDown className="text-white opacity-90 pointer-events-none shrink-0" size={16} strokeWidth={2} />
            </div>
          </div>
          <div className="px-[12px] lg:p-0 lg:h-full">
            <button type="submit" className="w-full h-[74px] lg:h-full bg-white text-[#003B49] text-[14px] font-[600] tracking-wider hover:bg-[#ff7d44] hover:text-white transition cursor-pointer duration-400">TRACK SHIPMENT</button>
          </div>
        </form>
      </div>
    </section>);
}