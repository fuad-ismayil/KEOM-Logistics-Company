"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaPinterestP, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import WavyText from "@/components/ui/WavyText";
type TeamMember = { src: string; alt: string; role: string; name: string; href: string; socials: { pinterest?: string; instagram?: string; twitter?: string; facebook?: string; }; };
const TEAM: TeamMember[] = [
    { src: "/images/teamarea/team-img1.jpg", alt: "Victoria L. Davis", role: "founder", name: "Victoria L. Davis", href: "/team-single", socials: { pinterest: "#", instagram: "#", twitter: "#", facebook: "#" }, },
    { src: "/images/teamarea/team-img2.jpg", alt: "Stephen Welch", role: "designer", name: "Stephen Welch", href: "/team-single", socials: { pinterest: "#", instagram: "#", twitter: "#", facebook: "#" }, },
    { src: "/images/teamarea/team-img3.jpg", alt: "Nina West", role: "designer", name: "Nina West", href: "/team-single", socials: { pinterest: "#", instagram: "#", twitter: "#", facebook: "#" }, },];
function TeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="group relative border border-[#E7E7E7] bg-white overflow-hidden">
            <div className="relative w-full aspect-[208/260]">
                <Image src={member.src} alt={member.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] opacity-0 bg-[#003B49]/[0.85] p-[30px] transition-all duration-300 group-hover:pointer-events-auto group-hover:h-full group-hover:opacity-100 border border-transparent group-hover:border-[#FF7D44]">
                <div className="flex h-full flex-col">
                    <ul className="flex items-center gap-[14px]">
                        {member.socials.pinterest && (
                            <li>
                                <a href={member.socials.pinterest} aria-label="Pinterest" className="text-white/70 transition-colors hover:text-[#FF7D44]"><FaPinterestP className="text-[14px]" /></a>
                            </li>)}
                        {member.socials.instagram && (
                            <li>
                                <a href={member.socials.instagram} aria-label="Instagram" className="text-white/70 transition-colors hover:text-[#FF7D44]"><FaInstagram className="text-[14px]" /></a>
                            </li>)}
                        {member.socials.twitter && (
                            <li>
                                <a href={member.socials.twitter} aria-label="X" className="text-white/70 transition-colors hover:text-[#FF7D44]"><FaXTwitter className="text-[14px]" /></a>
                            </li>)}
                        {member.socials.facebook && (
                            <li>
                                <a href={member.socials.facebook} aria-label="Facebook" className="text-white/70 transition-colors hover:text-[#FF7D44]"><FaFacebookF className="text-[14px]" /></a>
                            </li>)}
                    </ul>
                    <div className="mt-auto">
                        <p className="text-[#FF7D44] text-[12px] font-[700] uppercase tracking-[0.12em]">
                            {member.role}
                        </p>
                        <h4 className="mt-[6px] text-white text-[20px] font-[800] leading-[1.2]">
                            <Link href={member.href} className="hover:text-[#FF7D44]">
                                {member.name}
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>);
}
export default function TeamArea() {
    return (
        <section className="relative overflow-hidden bg-white pt-[120px] pb-[90px]">
            <div className="relative mx-auto w-full max-w-[1140px] px-[15px] 2xl:max-w-[1320px]">
                <Fade direction="up" triggerOnce duration={1000}>
                    <div className="text-center">
                        <div className="text-[#A7BCC0] text-[40px] leading-[1.2] font-bold lg:text-[60px]">
                            <WavyText text="Our avengers" />
                        </div>
                        <div className="mt-[10px] text-[#003B49] text-[40px] leading-[1.2] font-bold lg:text-[60px]">
                            <WavyText text="ready to take " delay={0.2} /><WavyText text="challenges" delay={0.4} />
                        </div>
                        <div className="mt-[18px] flex items-center justify-center">
                            <div className="h-px w-full max-w-[585px] bg-gradient-to-r from-white to-[#FF7D44]" />
                            <span className="mx-[14px] text-[#FF7D44] text-[14px] font-[700] uppercase">our team</span>
                            <div className="h-px w-full max-w-[585px] bg-gradient-to-l from-white to-[#FF7D44]" />
                        </div>
                    </div>
                </Fade>
                <div className="mt-[48px] hidden lg:grid grid-cols-3 gap-x-[24px]">
                    {TEAM.map((m, i) => (<Fade key={m.name} direction="left" triggerOnce duration={900} delay={i * 120}><TeamCard member={m} /></Fade>))}
                </div>
                <div className="mt-[48px] lg:hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        breakpoints={{ 768: { slidesPerView: 2 }, }}>
                        {TEAM.map((m, i) => (
                            <SwiperSlide key={m.name}><Fade direction="left" triggerOnce duration={900} delay={i * 120}><TeamCard member={m} /></Fade></SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </section>);
}