import BlogCard, { type BlogPost } from "@/components/blog/BlogCard";
import { FaXTwitter, FaPinterestP, FaFacebookF, FaInstagram, FaWordpress, FaAnglesLeft, FaAnglesRight, } from "react-icons/fa6";
import Link from "next/link";
const posts: BlogPost[] = [
  {
    id: "1",
    date: "24th March 2025",
    title: "Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    href: "/blog-details",
    imageSrc: "/images/blogarea/inner_b1.jpg",
  },
  {
    id: "2",
    date: "24th March 2025",
    title: "There are many variations passages of like consectetur lorem ipsum available.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    href: "/blog-details",
    imageSrc: "/images/blogarea/inner_b2.jpg",
    isVideo: true,
    videoHref: "https://www.youtube.com/watch?v=gyGsPlt06bo",
  },
  {
    id: "3",
    date: "24th March 2025",
    title: "I must explain to you how all this mistaken idea of denouncing pleasure.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    href: "/blog-details",
    imageSrc: "/images/blogarea/inner_b3.jpg",
  },];
const categories = [
  { name: "Branding", count: 4 },
  { name: "Corporat", count: 3 },
  { name: "Design", count: 3 },
  { name: "Gallery", count: 3 },];
const recentPosts = [
  { title: "User Experience Psychology And Performance Smshing", date: "August 19, 2024", href: "#" },
  { title: "Monthly Web Development Up Cost Of JavaScript", date: "August 19, 2024", href: "#" },
  { title: "There are many variation passages of like available.", date: "August 19, 2024", href: "#" },];
const tags = ["App", "Branding", "Corporat", "Design", "Gallery", "Video", "Web Design"];
const ACCENT = "#ea7944";
export default function InnerBlog() {
  return (
    <section className="pt-[120px] pb-[105px] bg-white" style={{ ["--accent" as any]: ACCENT }}>
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[856px_360px]">
          <div className="w-full">
            <div className="space-y-[50px]">{posts.map((p) => (<BlogCard key={p.id} post={p} />))}</div>
            <Pagination />
          </div>
          <aside className="space-y-[30px]">
            <Widget title="Search">
              <form action="#" className="flex w-full">
                <input type="search" placeholder="Search ..." className="h-[48px] w-full border border-[#d5dde3] bg-white px-[18px] text-[14px] text-[#6f7b86] outline-none placeholder:text-[#9aa6b2]" />
                <button type="submit" className="h-[48px] w-[110px] bg-[var(--accent)] text-[14px] font-semibold text-white">Search</button>
              </form>
            </Widget>
            <Widget title="Follow Us">
              <div className="flex items-center gap-[10px]">
                <Link href="#" aria-label="X" className="rounded-full border-[1px] border-[#003c49] hover:bg-[#ff6c41] hover:border-[#ff6c41] text-[#003c49] hover:text-white transition-all duration-300 p-[12px]">
                  <FaXTwitter className="h-[16px] w-[16px]" />
                </Link>
                <Link href="#" aria-label="Pinterest" className="rounded-full border-[1px] border-[#003c49] hover:bg-[#ff6c41] hover:border-[#ff6c41] text-[#003c49] hover:text-white transition-all duration-300 p-[12px]">
                  <FaPinterestP className="h-[16px] w-[16px]" />
                </Link>
                <Link href="#" aria-label="Facebook" className="rounded-full border-[1px] border-[#003c49] hover:bg-[#ff6c41] hover:border-[#ff6c41] text-[#003c49] hover:text-white transition-all duration-300 p-[12px]">
                  <FaFacebookF className="h-[16px] w-[16px]" />
                </Link>
                <Link href="#" aria-label="Instagram" className="rounded-full border-[1px] border-[#003c49] hover:bg-[#ff6c41] hover:border-[#ff6c41] text-[#003c49] hover:text-white transition-all duration-300 p-[12px]">
                  <FaInstagram className="h-[16px] w-[16px]" />
                </Link>
                <Link href="#" aria-label="WordPress" className="rounded-full border-[1px] border-[#003c49] hover:bg-[#ff6c41] hover:border-[#ff6c41] text-[#003c49] hover:text-white transition-all duration-300 p-[12px]">
                  <FaWordpress className="h-[16px] w-[16px]" />
                </Link>
              </div>
            </Widget>
            <Widget title="Categories">
              <ul className="space-y-[10px]">
                {categories.map((c) => (
                  <li key={c.name} className="flex items-center justify-between text-[16px] text-[#003c49] border-b border-[#003c49]/10">
                    <a href="#" className="inline-block transition-transform duration-300 hover:translate-x-[10px]">{c.name}</a>
                    <span className="text-[#003c49]">({c.count})</span>
                  </li>))}
              </ul>
            </Widget>
            <Widget title="Recent Posts">
              <ul className="space-y-[14px]">
                {recentPosts.map((r) => (
                  <li key={r.title}>
                    <a href={r.href} className="inline-block transition-transform duration-300 hover:translate-x-[10px] text-[16px] font-semibold leading-[1.45] text-[#223645]">{r.title} </a>
                    <span className="block text-[16px] leading-[1.45] text-[#223645] border-b border-[#003c49]/10">{r.date}</span>
                  </li>))}
              </ul>
            </Widget>
            <Widget title="Tag">
              <div className="flex flex-wrap gap-[5px]">
                {tags.map((t) => (<a key={t} href="#" className="border border-[#003c49] px-[19px] py-[10px] text-[15px] text-[#003c49] hover:border-[#ff6c41] transition-all duration-300">{t}</a>))}
              </div>
            </Widget>
          </aside>
        </div>
      </div>
    </section>);
}
function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#f5f5f5] p-[40px]">
      <h3 className="text-[22px] font-semibold text-[#223645] mb-[30px]">{title}</h3>
      <div className="mt-[16px]">{children}</div>
    </section>);
}
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode; }) { return <a href={href} aria-label={label} className="grid h-[34px] w-[34px] place-items-center rounded-full border border-[#d5dde3] bg-white text-[#6f7b86]">{children}</a>; }
function Pagination() {
  const items: Array<"prev" | "next" | number | "..."> = ["prev", 1, 2, 3, "...", 10, "next"];
  const active = 1;
  return (
    <div className="mt-[30px]">
      <nav aria-label="Pagination">
        <ul className="flex items-center gap-[8px]">
          {items.map((it, idx) => {
            const isActive = typeof it === "number" && it === active;
            const base = "grid h-[50px] w-[50px] place-items-center rounded-full text-[13px] font-semibold";
            const cls = isActive
              ? `${base} bg-[#1c1c1c] text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)]`
              : `${base} bg-[var(--accent)] text-white`;

            return (
              <li key={`${it}-${idx}`}>
                <a href="#" className={cls} aria-current={isActive ? "page" : undefined}>
                  {it === "prev" ? (<FaAnglesLeft className="h-[16px] w-[16px]" />) : it === "next" ? (<FaAnglesRight className="h-[16px] w-[16px]" />) : (it)}
                </a>
              </li>);
          })}
        </ul>
      </nav>
    </div>);
}