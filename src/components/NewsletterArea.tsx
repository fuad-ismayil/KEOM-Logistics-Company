// components/footer/NewsletterArea.tsx
import React from "react";

export default function NewsletterArea() {
  return (
    <section className="w-full mt-[65px]">
      {/* Match screenshot: orange block spans the full 1320px container width (no outer px padding) */}
      <div className="mx-auto w-full max-w-[1320px] bg-[#FF7D44] px-[30px] py-[50px]">
        <div className="flex items-center">
          {/* Left title */}
          <div className="w-5/12">
            <h2 className="text-white font-bold text-[44px] leading-[1.08]">
              Get daily feed &amp; updates
            </h2>
          </div>

          {/* Right form */}
          <div className="w-7/12">
            <form action="#" method="post" className="w-full">
              <div className="flex w-full items-center gap-[22px]">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name..."
                  required
                  className="h-[56px] w-[258px] rounded-[10px] border border-white bg-white px-[20px] text-[15px] text-[#030c26] outline-none placeholder:text-[#9aa3aa]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address..."
                  required
                  className="h-[56px] w-[257px] rounded-[10px] border border-white bg-white px-[20px] text-[15px] text-[#030c26] outline-none placeholder:text-[#9aa3aa]"
                />
                <button
                  type="submit"
                  className="h-[56px] w-[166px] bg-[#002832] text-white text-[15px] font-semibold uppercase tracking-[0.02em]"
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
