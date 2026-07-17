import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { articles } from "@/data/articles";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const categories = ["全部", "卵巢健康", "营养与运动", "心理支持", "子宫环境", "男性生育力"];

export default function Journal() {
  const [cat, setCat] = useState("全部");
  const [q, setQ] = useState("");

  const filtered = articles.filter(
    (a) =>
      (cat === "全部" || a.category === cat) &&
      (q === "" || a.title.includes(q) || a.excerpt.includes(q))
  );

  const featured = articles[0];
  const rest = filtered.filter((a) => a.id !== featured.id);

  return (
    <>
      <section className="relative pt-40 pb-16 bg-ivory-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-6">
              The Journal · 04
            </div>
            <h1 className="font-display text-display-xl text-ink-800 leading-[0.95] max-w-4xl">
              <span className="block">孕育知识，</span>
              <span className="block italic text-rose-400">写给正在路上的你</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-400 font-sansCN text-pretty">
              由蕊安医师团队主笔，每周二更新。不制造焦虑，只提供循证、可执行的孕育知识。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-8 bg-ivory-100 border-y border-ink-800/8">
        <div className="container-wide flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-full bg-ivory-50 border border-ink-800/8">
            <Search size={16} className="text-ink-400" />
            <input
              type="text"
              placeholder="搜索文章、关键词"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-200"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border",
                  cat === c
                    ? "bg-ink-800 text-ivory-100 border-ink-800"
                    : "bg-transparent text-ink-600 border-ink-800/15 hover:border-ink-800/40"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {cat === "全部" && !q && (
        <section className="py-16 bg-ivory-100">
          <div className="container-wide">
            <Link to={`/journal/${featured.id}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-4xl bg-ivory-50 p-6 lg:p-10 border border-ink-800/8 transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft">
              <div className="lg:col-span-7 aspect-[4/3] rounded-4xl overflow-hidden">
                <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="lg:col-span-5 p-2 lg:p-6">
                <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400 mb-4">
                  Featured · {featured.category}
                </div>
                <h2 className="font-display text-3xl lg:text-4xl text-ink-800 leading-tight text-balance">
                  {featured.title}
                </h2>
                <p className="mt-5 text-[15px] text-ink-400 font-sansCN leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div className="text-xs text-ink-400 font-sansCN">
                    {featured.author} · {featured.readTime} 分钟阅读
                  </div>
                  <div className="h-10 w-10 rounded-full bg-ink-800 text-ivory-100 flex items-center justify-center group-hover:bg-rose-400 transition-colors">
                    <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 bg-ivory-100">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {(cat === "全部" && !q ? rest : filtered).map((a, i) => (
            <Reveal key={a.id} delay={i * 0.05}>
              <Link
                to={`/journal/${a.id}`}
                className="group block h-full rounded-4xl bg-ivory-50 border border-ink-800/8 overflow-hidden transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.cover} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400 mb-3">
                    {a.category}
                  </div>
                  <h3 className="font-display text-xl text-ink-800 leading-tight text-balance">{a.title}</h3>
                  <p className="mt-3 text-sm text-ink-400 font-sansCN leading-relaxed line-clamp-2">{a.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-800/8 pt-4 text-[11px] text-ink-400">
                    <span>{a.author}</span>
                    <span>{a.readTime} min read</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
