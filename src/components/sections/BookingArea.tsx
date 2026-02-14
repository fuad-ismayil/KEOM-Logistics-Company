import Booking from "@/components/sections/Booking";
import WavyText from "@/components/ui/WavyText";
export default function BookingArea() {
  return (
    <section id="booking" className="relative hidden lg:block overflow-hidden bg-[#F5F5F5] pb-[120px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-white" />
      <div className="relative mx-auto w-full max-w-[1320px] px-4">
        <div className="grid grid-cols-1 items-end gap-y-[48px] lg:grid-cols-2">
          <div className="relative"><Booking /></div>
          <div className="pb-[50px] lg:pl-[80px]">
            <div className="mb-[80px]">
              <h2 className="text-[60px] font-[800] leading-[1.2]">
                <WavyText text="So many fun" delay={0.2} className="text-[#93abb0]" />
                <WavyText text="facts about service" delay={0.4} className="text-[#003c49]" />
              </h2>
              <div className="mt-[18px] flex items-center gap-[14px]">
                <span className="text-[14px] font-[800] uppercase tracking-[0.14em] text-[#FF7D44]">fun fact</span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#F5F5F5] to-[#FF7D44]" />
              </div>
            </div>
            <div className="max-w-[440px]">
              <ul className="border-t border-[#E7E7E7]">
                <li className="flex items-center justify-between border-b border-[#E7E7E7] py-[18px]">
                  <h3 className="text-[20px] font-[800] text-[#003B49]">Assets</h3>
                  <div className="text-[48px] font-[800] leading-none text-[#FF7D44]">100+</div>
                </li>
                <li className="flex items-center justify-between border-b border-[#E7E7E7] py-[18px]">
                  <h3 className="text-[20px] font-[800] text-[#003B49]">Permit we have</h3>
                  <div className="text-[48px] font-[800] leading-none text-[#FF7D44]">1k+</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);
}