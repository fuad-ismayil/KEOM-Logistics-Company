import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import WavyText from "./WavyText";
export default function Booking() {
  return (
    <form action="#" className=" relative z-[1] border-t-[10px] border-t-[#FF7D44] bg-[#003B49] p-[50px] w-[588px]">
      <h2 className="text-[34px] font-[800] leading-[1.15] text-white">
        <WavyText text="Request A Quote" delay={0.2} />
      </h2>
      <div className="mt-[26px] grid grid-cols-1 gap-x-[24px] gap-y-[22px] md:grid-cols-2">
        <div>
          <label className="block text-[12px] font-[700] text-white">First Name</label>
          <input type="text" name="firstn" placeholder="First Name" required className="mt-[10px] h-[44px] w-full bg-[#0B4C59] px-[18px] text-[13px] text-white outline-none placeholder:text-white/40" />
        </div>
        <div>
          <label className="block text-[12px] font-[700] text-white">Eamil</label>
          <input type="text" name="email" placeholder="Eamil" required className="mt-[10px] h-[44px] w-full bg-[#0B4C59] px-[18px] text-[13px] text-white outline-none placeholder:text-white/40" />
        </div>
        <div>
          <label className="block text-[12px] font-[700] text-white">Freight Type</label>
          <div className="relative mt-[10px]">
            <select name="freightType" defaultValue="Incoterms" className="h-[44px] w-full appearance-none bg-[#0B4C59] px-[18px] pr-[44px] text-[13px] text-white outline-none">
              <option value="Incoterms">Incoterms</option>
              <option value="Departure 1">Departure 1</option>
              <option value="Departure 2">Departure 2</option>
              <option value="Departure 3">Departure 3</option>
              <option value="Departure 4">Departure 4</option>
              <option value="Departure 5">Departure 5</option>
            </select>
            <RiArrowDropDownLine className="pointer-events-none text-[32px] absolute right-[16px] top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <label className="block text-[12px] font-[700] text-white">Load</label>
          <div className="relative mt-[10px]">
            <select name="load" defaultValue="0" className="h-[44px] w-full appearance-none bg-[#0B4C59] px-[18px] pr-[44px] text-[13px] text-white outline-none">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <RiArrowDropDownLine className="pointer-events-none text-[32px] absolute right-[16px] top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="mt-[6px] h-[46px] w-full bg-[#FF7D44] text-[11px] font-[800] uppercase tracking-[0.12em] text-white">Submit Now</button>
        </div>
      </div>
      <div className="mt-[34px] space-y-[22px]">
        <div className="flex items-start gap-[16px]">
          <div className="relative mt-[2px] h-[34px] w-[34px] shrink-0">
            <Image src="/images/booking/r-viber-icon.png" alt="Phone" fill className="object-contain" sizes="34px" />
          </div>
          <div>
            <h5 className="text-[11px] font-[700] uppercase tracking-[0.10em] text-white/55">feel free to call us</h5>
            <h3 className="mt-[6px] text-[18px] font-[800] text-white">+(123) 456 789 00</h3>
          </div>
        </div>
        <div className="flex items-start gap-[16px]">
          <div className="relative mt-[2px] h-[34px] w-[34px] shrink-0">
            <Image src="/images/booking/r-email-icon.png" alt="Email" fill className="object-contain" sizes="34px" />
          </div>
          <div>
            <h5 className="text-[11px] font-[700] uppercase tracking-[0.10em] text-white/55">email us now</h5>
            <h3 className="mt-[6px] text-[18px] font-[800] text-white">info@example.com</h3>
          </div>
        </div>
      </div>
    </form>);}