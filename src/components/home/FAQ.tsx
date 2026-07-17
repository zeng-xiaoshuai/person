import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categories = ["全部", "服务", "流程", "费用", "隐私"] as const;

export function FAQ() {
  const [active, setActive] = useState<string | null>(faqs[0].id);
  const [cat, setCat] = useState<(typeof categories)[number]>("全部");

  const filtered = faqs.filter((f) => cat === "全部" || f.category === cat);

  return (
    <section className="relative py-24 lg:py-36 bg-ivory-200">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Common Questions"
              title={
                <>
                  一些你可能<br />
                  <span className="italic text-rose-400">想问的问题</span>
                </>
              }
              description="在第一次咨询之前，我们整理了被问到最多的 8 个问题。如果你还有更多疑问，欢迎在预约时告诉我们。"
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border",
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

          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink-800/15 border-t border-b border-ink-800/15">
              {filtered.map((f) => (
                <li key={f.id}>
                  <button
                    onClick={() => setActive(active === f.id ? null : f.id)}
                    className="group w-full text-left py-6 flex items-start gap-6"
                  >
                    <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 pt-2 w-16 shrink-0">
                      {f.category}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg lg:text-xl text-ink-800 text-balance">{f.question}</h3>
                      <AnimatePresence initial={false}>
                        {active === f.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-[15px] leading-relaxed text-ink-400 font-sansCN text-pretty">
                              {f.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <Plus
                      size={20}
                      strokeWidth={1.2}
                      className={cn(
                        "shrink-0 mt-1 transition-all duration-500",
                        active === f.id ? "rotate-45 text-rose-400" : "text-ink-200 group-hover:text-ink-400"
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
