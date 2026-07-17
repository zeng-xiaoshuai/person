import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { stories } from "@/data/stories";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Stories() {
  const [active, setActive] = useState(0);
  const current = stories[active];

  return (
    <section className="relative py-24 lg:py-36 bg-ivory-200">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Real Stories"
            title={
              <>
                真实的故事，<br />
                <span className="italic text-rose-400">真实的拥抱</span>
              </>
            }
            description="每一个成功数字的背后，都是一段被温柔托住的旅程。"
          />
          <Link to="/stories" className="btn-ghost group shrink-0">
            全部故事
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 relative aspect-[4/5] lg:aspect-auto lg:h-[640px] rounded-4xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img src={current.cover} alt={current.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800/70 via-ink-800/10 to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-8 left-8 right-8 text-ivory-100 z-10">
              <div className="font-sans text-[10px] uppercase tracking-wider2 text-ivory-100/70">
                {current.couple} · {current.city} · {current.year}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mt-3 leading-tight max-w-md">{current.title}</h3>
              <p className="mt-3 text-sm text-ivory-100/80 max-w-md font-sansCN leading-relaxed">{current.summary}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="font-display italic text-gold-400 mb-6">Stories / 01 — 06</div>
            <ul className="flex-1 divide-y divide-ink-800/10">
              {stories.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(i)}
                    className="group w-full text-left py-5 flex items-center gap-4 transition-all"
                  >
                    <div className={`font-sans text-xs tabular-nums w-8 ${active === i ? "text-rose-400" : "text-ink-200"}`}>
                      0{i + 1}
                    </div>
                    <div className="flex-1">
                      <div className={`font-display text-lg lg:text-xl transition-colors ${active === i ? "text-ink-800" : "text-ink-400 group-hover:text-ink-600"}`}>
                        {s.couple}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider2 text-ink-400 mt-1">
                        {s.service} · {s.duration}
                      </div>
                    </div>
                    <Plus size={18} className={`shrink-0 transition-all ${active === i ? "rotate-45 text-rose-400" : "text-ink-200 group-hover:text-ink-400"}`} />
                  </button>
                </li>
              ))}
            </ul>
            <Link to={`/stories/${current.id}`} className="btn-primary mt-8 self-start group">
              阅读完整故事
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
