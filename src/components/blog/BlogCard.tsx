import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
export type BlogPost = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  imageSrc: string;
  isVideo?: boolean;
  videoHref?: string;
};
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex w-full flex-col border border-[#efefef] bg-white lg:h-[895px] lg:w-[856px]">
      <div className="relative w-full">
        <div className="relative h-[240px] w-full sm:h-[360px] lg:h-[580px]">
          <Image src={post.imageSrc} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 856px" priority={false} />
        </div>
        <div className="absolute bottom-[-15px] right-[14px] rounded-[2px] bg-[var(--accent)] px-[10px] py-[6px] text-[16px] font-semibold text-white">
          {post.date}
        </div>
        {post.isVideo && (
          <a href={post.videoHref || "#"} className="absolute inset-0 grid place-items-center" aria-label="Play video">
            <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
              <FaPlay className="h-[16px] w-[16px] text-[var(--accent)]" />
            </span>
          </a>)}
      </div>
      <div className="flex flex-1 flex-col px-[30px] pb-[28px] pt-[24px]">
        <h2 className="text-[22px] font-semibold leading-[1.25] text-[#223645] md:text-[30px]">
          <Link href={post.href} className="hover:text-[var(--accent)] transition-all duration-300">
            {post.title}
          </Link>
        </h2>
        <p className="mt-[12px] text-[16px] leading-[1.8] text-[#6f7b86]">{post.excerpt}</p>
        <div className="pt-[24px]">
          <Link href={post.href} className="hover:text-[#003c49] transition-all duration-300 text-[15px] font-semibold uppercase text-[var(--accent)] underline decoration-[2px] underline-offset-[7px]">
            Read More
          </Link>
        </div>
      </div>
    </article>);
}