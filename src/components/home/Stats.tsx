import { useReveal, useCountUp } from "@/hooks/useReveal";
import { stats } from "@/data/faq";

export function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-ink-800 text-ivory-100 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-rose-400/10 blur-3xl animate-soft-pulse" />
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-gold-400/10 blur-3xl animate-soft-pulse" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="container-wide relative">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold-300">By the Numbers</span>
          <h2 className="font-display text-display-md mt-6 text-ivory-100 leading-[1.05]">
            <span className="block">数字不是终点，</span>
            <span className="block italic text-rose-300/90">每一个家庭是。</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {stats.map((s, i) => (
            <StatBlock key={s.label} start={visible} value={s.value} suffix={s.suffix} label={s.label} note={s.note} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  value,
  suffix,
  label,
  note,
  start,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  note?: string;
  start: boolean;
  delay: number;
}) {
  const v = useCountUp(value, 2000, start);
  const display = value >= 1000 ? Math.round(v).toLocaleString() : v.toFixed(1);
  return (
    <div className="border-t border-ivory-100/15 pt-6" style={{ animationDelay: `${delay}s` }}>
      <div className="flex items-baseline gap-1">
        <div className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory-100 leading-none tracking-tightish">
          {display}
        </div>
        {suffix && <div className="font-display text-3xl text-gold-300 font-light">{suffix}</div>}
      </div>
      <div className="mt-4 text-sm text-ivory-100/80 font-sansCN">{label}</div>
      {note && <div className="mt-1 text-[11px] uppercase tracking-wider2 text-ivory-100/40">{note}</div>}
    </div>
  );
}
