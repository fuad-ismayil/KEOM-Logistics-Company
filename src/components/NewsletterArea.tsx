import React from "react";
import WavyText from "./WavyText";

export default function NewsletterArea() {
  return (
    <section className="w-full">
      {/* Changes:
        1. Added mx-[24px]: Creates 24px gap from screen edges on mobile/tablet.
        2. xl:mx-auto: Centers it on large screens.
        3. w-auto: Allows margin to take effect (overrides w-full).
      */}
      <div className="mx-[24px] xl:mx-auto max-w-[1320px] bg-[#FF7D44] px-[30px] py-[50px] md:px-[60px]">
        
        {/* Container: Vertical on Mobile, Split Columns on Tablet (md) & PC */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-10">
          
          {/* Left Title: Center on mobile, Left on Tablet+ */}
          <div className="w-full md:w-5/12 text-center md:text-left">
            <WavyText
              text="Get daily feed &amp; updates"
              className="text-white font-bold text-[36px] leading-[1.1] mx-auto md:mx-0 max-w-[15ch] md:max-w-none"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-7/12">
            <form action="#" method="post" className="w-full">
              {/* Input Layout:
                 - Mobile/Tablet (< xl): flex-col (Inputs stacked vertically)
                 - PC (xl): flex-row (Inputs side-by-side)
              */}
              <div className="flex flex-col xl:flex-row items-center gap-[15px] w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name..."
                  required
                  className="h-[56px] w-full xl:w-[258px] border border-white bg-white px-[20px] text-[15px] text-[#030c26] outline-none placeholder:text-[#9aa3aa]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address..."
                  required
                  className="h-[56px] w-full xl:w-[257px] border border-white bg-white px-[20px] text-[15px] text-[#030c26] outline-none placeholder:text-[#9aa3aa]"
                />
                <button
                  type="submit"
                  className="h-[56px] w-full xl:w-[166px] bg-[#002832] text-white text-[15px] font-bold uppercase tracking-[0.02em] hover:bg-black transition-colors"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}