import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function Doctors() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <>
      <section className="relative pt-40 pb-24 bg-ivory-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-6">
              Our Specialists · 02
            </div>
            <h1 className="font-display text-display-xl text-ink-800 leading-[0.95] max-w-4xl">
              <span className="block">与他们相遇，</span>
              <span className="block italic text-rose-400">是你在蕊安最重要的一步</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-400 font-sansCN text-pretty">
              蕊安的医师团队来自北京协和、上海集爱、复旦生殖中心等顶尖机构，平均从业 16 年。他们既是临床专家，也是科研工作者、心理陪伴者。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-ivory-200">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-5">
          {doctors.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.06}>
              <Link
                to={`/doctors/${d.id}`}
                className="group block rounded-4xl bg-ivory-50 border border-ink-800/8 overflow-hidden transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft"
                onMouseEnter={() => setHover(d.id)}
                onMouseLeave={() => setHover(null)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-5">
                  <div className="sm:col-span-2 relative aspect-square overflow-hidden">
                    <img
                      src={d.avatar}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:col-span-3 p-7 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="font-sans text-[10px] uppercase tracking-wider2 text-gold-400">
                        0{i + 1} · {d.years} 年经验
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl mt-2 text-ink-800">{d.name}</h3>
                      <div className="text-xs text-ink-400 font-sansCN mt-1">{d.title}</div>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {d.specialty.map((s) => (
                          <span key={s} className="text-[10px] tracking-wider2 px-2 py-1 rounded-full bg-ivory-200 text-ink-600">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-ink-800/8 pt-4">
                      <span className="text-xs text-ink-400 font-sansCN">{d.schedule}</span>
                      <div className={cn(
                        "h-9 w-9 rounded-full flex items-center justify-center transition-all duration-500",
                        hover === d.id ? "bg-ink-800 text-ivory-100" : "bg-ivory-200 text-ink-800"
                      )}>
                        <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                      </div>
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
