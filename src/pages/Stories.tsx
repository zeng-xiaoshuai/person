import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { stories } from "@/data/stories";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const filters = ["全部", "IVF", "冻卵", "复发性流产", "显微取精", "IUI"];

export default function Stories() {
  const [filter, setFilter] = useState("全部");
  const filtered = stories.filter((s) => filter === "全部" || s.service.toLowerCase().includes(filter.toLowerCase()) || s.service.includes(filter));

  return (
    <>
      <section className="relative pt-40 pb-16 bg-ivory-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-6">
              Real Stories · 03
            </div>
            <h1 className="font-display text-display-xl text-ink-800 leading-[0.95] max-w-4xl">
              <span className="block">每一段故事，</span>
              <span className="block italic text-rose-400">都是一束光</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-400 font-sansCN text-pretty">
              我们邀请了 6 个家庭分享他们在蕊安的旅程。他们的名字已经过授权使用，部分细节做了隐私保护处理。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-8 bg-ivory-100 border-y border-ink-800/8 sticky top-20 z-30 backdrop-blur-xl bg-ivory-100/80">
        <div className="container-wide flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border",
                filter === f
                  ? "bg-ink-800 text-ivory-100 border-ink-800"
                  : "bg-transparent text-ink-600 border-ink-800/15 hover:border-ink-800/40"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-ivory-100">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <Link
                to={`/stories/${s.id}`}
                className="group block rounded-4xl bg-ivory-50 border border-ink-800/8 overflow-hidden transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={s.cover} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <div className="text-[10px] uppercase tracking-wider2 text-ivory-100/90 bg-ink-800/40 backdrop-blur px-2.5 py-1 rounded-full">
                      {s.service}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider2 text-ivory-100/80">{s.year}</div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-ivory-100">
                    <div className="font-display italic text-xs opacity-80">{s.couple} · {s.city}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl lg:text-2xl text-ink-800 leading-tight text-balance">{s.title}</h3>
                  <p className="mt-3 text-sm text-ink-400 font-sansCN leading-relaxed line-clamp-2">{s.summary}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-800/8 pt-4">
                    <span className="text-[11px] uppercase tracking-wider2 text-ink-400">{s.duration}</span>
                    <div className="h-8 w-8 rounded-full bg-ivory-200 group-hover:bg-ink-800 group-hover:text-ivory-100 flex items-center justify-center transition-all duration-500">
                      <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                    </div>
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
