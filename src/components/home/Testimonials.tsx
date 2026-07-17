import { testimonials } from "@/data/faq";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-36 bg-ivory-100 overflow-hidden">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <SectionHeading
            eyebrow="Words of Trust"
            title={
              <>
                来自他们，<br />
                <span className="italic text-rose-400">关于温柔的回响</span>
              </>
            }
          />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.1} className="break-inside-avoid mb-6">
              <div
                className="rounded-4xl p-7 border border-ink-800/8 transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft"
                style={{
                  background: i % 3 === 0 ? "#FDFAF6" : i % 3 === 1 ? "#F3DCD9" : "#F8F4EE",
                }}
              >
                <div className="font-display italic text-3xl text-rose-300 leading-none mb-3">"</div>
                <p className="font-sansCN text-[15px] leading-relaxed text-ink-800 text-pretty">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink-800/10 pt-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-ivory-200">
                    <img src={t.avatar} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-ink-800">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-wider2 text-ink-400">{t.city} · {t.service}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
