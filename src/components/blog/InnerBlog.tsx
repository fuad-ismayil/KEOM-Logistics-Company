"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard, { type BlogPost } from "@/components/blog/BlogCard";
import { FaXTwitter, FaPinterestP, FaFacebookF, FaInstagram, FaWordpress, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const ACCENT = "#ea7944";

export default function InnerBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 3;

  const categoriesList = [
    { name: "General", value: "general" },
    { name: "Business", value: "business" },
    { name: "Sports", value: "sports" },
    { name: "Technology", value: "technology" },
    { name: "Health", value: "health" },
    { name: "Science", value: "science" },
  ];

  const tags = ["News", "World", "Tech", "Innovation", "Daily", "Media"];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        if (searchQuery) {
          url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`;
        }

        const response = await axios.get(url);

        const formattedData: BlogPost[] = response.data.articles
          .filter((article: any) => article.urlToImage)
          .map((article: any, index: number) => ({
            id: index.toString(),
            date: new Date(article.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
            title: article.title,
            excerpt: article.description || "Click to read more about this news...",
            href: article.url,
            imageSrc: article.urlToImage,
            isVideo: false,
          }));

        setPosts(formattedData);
        setCurrentPage(1);
      } catch (error) {
        console.error("Xəbərlər yüklənmədi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, searchQuery]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    if (query.trim()) {
      setSearchQuery(query);
      setCategory("");
    }
  };

  return (
    <section className="pt-[120px] pb-[105px] bg-white" style={{ ["--accent" as any]: ACCENT }}>
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[856px_360px]">

          <div className="w-full">
            {loading ? (
              <div className="text-center py-10 font-bold text-xl text-[#003c49]">Loading News...</div>
            ) : currentPosts.length > 0 ? (
              <div className="space-y-[50px]">
                {currentPosts.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">No news found.</div>
            )}

            {!loading && posts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
              />
            )}
          </div>
          <aside className="space-y-[30px]">
            <Widget title="Search">
              <form onSubmit={handleSearch} className="flex w-full">
                <input name="search" type="search" placeholder="Search news..." className="h-[48px] w-full border border-[#d5dde3] bg-white px-[18px] text-[14px] text-[#6f7b86] outline-none placeholder:text-[#9aa6b2]" />
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
                {categoriesList.map((c) => (
                  <li key={c.name} className="flex items-center justify-between text-[16px] text-[#003c49] border-b border-[#003c49]/10 cursor-pointer" onClick={() => { setCategory(c.value); setSearchQuery(""); }}>
                    <span className={`inline-block transition-transform duration-300 hover:translate-x-[10px] ${category === c.value ? "font-bold text-[#ea7944]" : ""}`}>
                      {c.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Widget>
            <Widget title="Recent Posts">
              <ul className="space-y-[14px]">
                {posts.slice(0, 3).map((r, idx) => (
                  <li key={idx}>
                    <a href={r.href} target="_blank" className="inline-block transition-transform duration-300 hover:translate-x-[10px] text-[16px] font-semibold leading-[1.45] text-[#223645]">
                      {r.title}
                    </a>
                    <span className="block text-[16px] leading-[1.45] text-[#223645] border-b border-[#003c49]/10 mt-1">
                      {r.date}
                    </span>
                  </li>
                ))}
              </ul>
            </Widget>
            <Widget title="Tags">
              <div className="flex flex-wrap gap-[5px]">
                {tags.map((t) => (
                  <a key={t} href="#" className="border border-[#003c49] px-[19px] py-[10px] text-[15px] text-[#003c49] hover:border-[#ff6c41] transition-all duration-300">
                    {t}
                  </a>
                ))}
              </div>
            </Widget>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#f5f5f5] p-[40px]">
      <h3 className="text-[22px] font-semibold text-[#223645] mb-[30px]">{title}</h3>
      <div className="mt-[16px]">{children}</div>
    </section>
  );
}

function Pagination({ currentPage, totalPages, paginate }: { currentPage: number, totalPages: number, paginate: (n: number) => void }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mt-[30px]">
      <nav aria-label="Pagination">
        <ul className="flex items-center gap-[8px]">
          <li>
            <button onClick={() => paginate(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={`grid h-[50px] w-[50px] place-items-center rounded-full text-[13px] font-semibold bg-[var(--accent)] text-white ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
              <FaAnglesLeft className="h-[16px] w-[16px]" />
            </button>
          </li>
          {pageNumbers.map(number => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`grid h-[50px] w-[50px] place-items-center rounded-full text-[13px] font-semibold 
                  ${currentPage === number
                    ? "bg-[#1c1c1c] text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
                    : "bg-[var(--accent)] text-white"}`}>{number}</button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`grid h-[50px] w-[50px] place-items-center rounded-full text-[13px] font-semibold bg-[var(--accent)] text-white ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}>
              <FaAnglesRight className="h-[16px] w-[16px]" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}