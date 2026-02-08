import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoIosPin } from "react-icons/io";
import NewsletterArea from "./NewsletterArea";
const ACCENT = "#ff6c41";
const TITLE_CLS = "mb-[30px] text-[14px] font-bold uppercase tracking-[0.08em] text-[#003b496e]";
const COL_CLS = "mb-[30px] w-full sm:w-[48%]";
const LISTS = [
  { title: "Essential", links: [{ l: "About Us", h: "/about" }, { l: "Services", h: "/services" }, { l: "Pricing Plan", h: "/pricing" }, { l: "Get In Touch", h: "/contact" }, { l: "Gallery", h: "/projects" }, { l: "Blog", h: "/blog" }] },
  { title: "Services", links: [{ l: "Road Freight", h: "/single-service" }, { l: "Ship Freight", h: "/single-service" }, { l: "Plane Freight", h: "/single-service" }, { l: "Warehouse Freight", h: "/single-service" }, { l: "Third Party Logistics", h: "/single-service" }, { l: "Transportation", h: "/single-service" }] }];
const ContactItem = ({ Icon, children }: any) => (
  <li className="flex gap-[15px] text-[#003B49] text-[14px] leading-[26px]">
    <Icon color={ACCENT} className="mt-[4px] h-[16px] w-[16px] shrink-0" />{children}
  </li>);
export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#777]">
      <div className="border-t-[5px] border-[#FF7D44]">
        <div className="mx-auto max-w-[1320px] px-[15px] pt-[90px] pb-[40px]">
          <div className="flex flex-wrap justify-between">
            <div className={`${COL_CLS} xl:w-[440px]`}>
              <div className="mb-[30px]">
                <Link href="/"><Image src="/images/footer/f_logo.png" alt="Keom" width={132} height={40} className="h-auto w-[132px]" /></Link>
              </div>
              <p className="pr-[90px] text-[#777] leading-[26px]">
                A logistics firm is a business entity formed by one or more logistics experts to engage in the management and coordination of transportation, warehousing, and distribution of goods.
              </p>
              <div className="mt-[55px] inline-flex items-center gap-[20px]">
                <Image src="/images/footer/f-email-icon.png" alt="Email" width={30} height={30} className="h-[30px] w-[30px] shrink-0" />
                <a href="mailto:info@example.com" className="text-[#003B49] text-[20px] font-bold leading-[1]">info@example.com</a>
              </div>
            </div>
            {LISTS.map((s) => (
              <div key={s.title} className={`${COL_CLS} xl:w-[220px]`}>
                <h3 className={TITLE_CLS}>{s.title}</h3>
                <ul className="space-y-[10px]">
                  {s.links.map((link) => (
                    <li key={link.l} className="flex items-center">
                      <FaChevronRight color={ACCENT} className="mr-[15px] h-[18px] w-[18px]" />
                      <Link href={link.h} className="text-[#003B49] leading-[26px] hover:text-[#FF7D44]">{link.l}</Link>
                    </li>))}
                </ul>
              </div>))}
            <div className={`${COL_CLS} xl:w-[330px]`}>
              <h3 className={TITLE_CLS}>Get In Touch</h3>
              <ul className="space-y-[15px]">
                <ContactItem Icon={FaPhoneAlt}><a href="tel:+12345678900" className="hover:text-[#FF7D44]">+(123) 456 789 00</a></ContactItem>
                <ContactItem Icon={TbMailFilled}><a href="mailto:info@example.com" className="text-[#003B49] hover:text-[#FF7D44]">info@example.com</a></ContactItem>
                <ContactItem Icon={IoIosPin}><span>1247/Plot No. 39, 15th Phase, LHB Colony, Kanpur</span></ContactItem>
              </ul>
            </div>
          </div>
        </div>
        <NewsletterArea />
        <div className="mx-auto max-w-[1320px] px-[15px] py-[30px] text-center text-[15px] text-[#777]">
          Copyright & Design By <Link href="/" className="font-bold text-[#003B49]">©Zcubedesign</Link> Created by <Link href="https://github.com/fuad-ismayil" target="_blank" className="font-bold text-[#003B49]">©fuad-ismayil</Link> - {new Date().getFullYear()}. All Rights Reserved
        </div>
      </div>
    </footer>);}