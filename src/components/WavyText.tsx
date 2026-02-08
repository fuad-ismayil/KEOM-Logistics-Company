"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
interface WavyTextProps {
  text: string;
  className?: string;
  delay?: number;
}
export default function WavyText({ text, className = "", delay = 0 }: WavyTextProps) {
  const container = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".char", { x: 50, opacity: 0 });
      gsap.to(".char", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: delay,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, container);
    return () => ctx.revert();
  }, [delay]);
  return (
    <span ref={container} className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}