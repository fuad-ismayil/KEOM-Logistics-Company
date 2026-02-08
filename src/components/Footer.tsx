// components/footer/Footer.tsx
import Image from "next/image";
import React from "react";
import NewsletterArea from "./NewsletterArea";

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M7.22 4.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L11.69 10 7.22 5.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.5 16.9c-1.4 0-2.8-.2-4.1-.7-.4-.1-.8 0-1.1.2l-2.6 2c-3-1.6-5.5-4.1-7.1-7.1l2-2.6c.3-.3.4-.7.2-1.1-.5-1.3-.7-2.7-.7-4.1A1.5 1.5 0 0 0 5.6 2H3.5A1.5 1.5 0 0 0 2 3.5C2 14.3 9.7 22 20.5 22a1.5 1.5 0 0 0 1.5-1.5v-2.1a1.5 1.5 0 0 0-1.5-1.5Z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
    </svg>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

const essentialLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing Plan", href: "/pricing" },
  { label: "Get In Touch", href: "/contact" },
  { label: "Gallery", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

const servicesLinks = [
  { label: "Road Freight", href: "/single-service" },
  { label: "Ship Freight", href: "/single-service" },
  { label: "Plane Freight", href: "/single-service", highlight: true }, // orange in screenshot
  { label: "Warehouse Freight", href: "/single-service" },
  { label: "Thaird Party Logistics", href: "/single-service" },
  { label: "Transportation", href: "/single-service" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#777]">
      {/* Top border line */}
      <div className="border-t-[5px] border-[#FF7D44]">
        {/* Footer top */}
        <div className="mx-auto max-w-[1320px] px-[15px] pt-[90px] pb-[40px]">
          <div className="flex flex-wrap justify-between">
            {/* Column 1 */}
            <div className="mb-[30px] w-full sm:w-[48%] xl:w-[440px]">
              <div className="mb-[30px]">
                <Image
                  src="/images/footer/f_logo.png"
                  alt="Keom"
                  width={160}
                  height={46}
                  className="h-auto w-[160px]"
                />
              </div>

              <p className="pr-[90px] text-[#777] leading-[26px]">
                A logistics firm is a business entity formed by one or more logistics
                experts to engage in the management and coordination of transportation,
                warehousing, and distribution of goods.
              </p>

              <div className="mt-[40px] inline-flex items-center gap-[20px]">
                <div className="shrink-0">
                  <Image
                    src="/images/footer/f-email-icon.png"
                    alt="Email"
                    width={46}
                    height={46}
                    className="h-[46px] w-[46px]"
                  />
                </div>
                <div>
                  <a
                    href="mailto:info@example.com"
                    className="text-[#003B49] text-[20px] font-bold leading-[1]"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="mb-[30px] w-full sm:w-[48%] xl:w-[220px]">
              <h3 className="mb-[30px] text-[14px] font-bold uppercase tracking-[0.08em] text-[#003b496e]">
                Essential
              </h3>

              <ul className="space-y-[10px]">
                {essentialLinks.map((l) => (
                  <li key={l.label} className="flex items-center">
                    <ChevronRightIcon className="mr-[15px] h-[18px] w-[18px] text-[#FF7D44]" />
                    <a
                      href={l.href}
                      className="text-[#003B49] leading-[26px] hover:text-[#0d6efd] hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="mb-[30px] w-full sm:w-[48%] xl:w-[220px]">
              <h3 className="mb-[30px] text-[14px] font-bold uppercase tracking-[0.08em] text-[#003b496e]">
                Services
              </h3>

              <ul className="space-y-[10px]">
                {servicesLinks.map((l) => (
                  <li key={l.label} className="flex items-center">
                    <ChevronRightIcon className="mr-[15px] h-[18px] w-[18px] text-[#FF7D44]" />
                    <a
                      href={l.href}
                      className={[
                        "leading-[26px] hover:underline",
                        l.highlight ? "text-[#FF7D44]" : "text-[#003B49]",
                        l.highlight ? "hover:text-[#FF7D44]" : "hover:text-[#0d6efd]",
                      ].join(" ")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="mb-[30px] w-full sm:w-[48%] xl:w-[330px]">
              <h3 className="mb-[30px] text-[14px] font-bold uppercase tracking-[0.08em] text-[#003b496e]">
                Get In Touch
              </h3>

              <ul className="space-y-[15px]">
                <li className="flex gap-[15px] text-[#003B49] text-[14px] leading-[26px]">
                  <PhoneIcon className="mt-[4px] h-[16px] w-[16px] shrink-0 text-[#FF7D44]" />
                  <span>+(123) 456 789 00</span>
                </li>

                <li className="flex gap-[15px] text-[#003B49] text-[14px] leading-[26px]">
                  <MailIcon className="mt-[4px] h-[16px] w-[16px] shrink-0 text-[#FF7D44]" />
                  <a
                    href="mailto:info@example.com"
                    className="text-[#003B49] hover:text-[#0d6efd] hover:underline"
                  >
                    info@example.com
                  </a>
                </li>

                <li className="flex gap-[15px] text-[#003B49] text-[14px] leading-[26px]">
                  <PinIcon className="mt-[4px] h-[16px] w-[16px] shrink-0 text-[#FF7D44]" />
                  <span>
                    1247/Plot No. 39, 15th Phase,
                    <br />
                    LHB Colony, Kanpur
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <NewsletterArea />

        {/* Copyright */}
        <div className="mx-auto max-w-[1320px] px-[15px] py-[30px] text-center text-[15px] text-[#777]">
          Copyright &amp; Design By{" "}
          <a href="#" className="font-bold text-[#003B49]">
            ©Zcubedesign
          </a>{" "}
          - 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
