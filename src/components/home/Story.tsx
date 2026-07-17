import { useReveal } from "@/hooks/useReveal";

export function Story() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-ivory-100 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow text-gold-400">Our Philosophy</span>
            <h2 className="font-display text-display-md mt-6 text-ink-800 leading-[1.05]">
              <span className="block">科技在左，</span>
              <span className="block italic text-rose-400">共情在右。</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-400 font-sansCN max-w-md text-pretty">
              蕊安相信，最好的医学是科技的精度与人文的温度的合奏。我们用全球领先的设备与技术解决生物学问题，但我们更在意——你作为一个完整的人，在这条路上是否被好好对待。
            </p>
          </div>

          <div className="lg:col-span-7 space-y-12">
            {principles.map((p, i) => (
              <PrincipleBlock key={p.title} {...p} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    eyebrow: "01 · Precision",
    title: "精度，体现在每一个细胞",
    body: "Time-lapse 胚胎观察、24 全染色体 NGS 检测、单精子显微注射——蕊安胚胎实验室通过 ISO 9001:2015 认证，每一颗胚胎、每一个卵子都被严格记录。",
    stat: "72%",
    statLabel: "囊胚形成率",
  },
  {
    eyebrow: "02 · Empathy",
    title: "共情，是我们的处方",
    body: "我们设有专病心理支持门诊、个案管理师一对一全程陪伴。IVF 不是冷冰冰的流程，而是一段需要被托住的人生。",
    stat: "5,000+",
    statLabel: "小时心理支持",
  },
  {
    eyebrow: "03 · Privacy",
    title: "隐私，是绝对的边界",
    body: "独立诊室、单人取卵室、双因素认证电子病历、就诊记录仅本人可查。我们不与第三方共享任何数据，包括家属。",
    stat: "100%",
    statLabel: "隐私保护",
  },
];

function PrincipleBlock({ eyebrow, title, body, stat, statLabel, index, visible }: { eyebrow: string; title: string; body: string; stat: string; statLabel: string; index: number; visible: boolean }) {
  return (
    <div
      className={`group relative rounded-4xl bg-ivory-50 border border-ink-800/8 p-8 lg:p-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="font-sans text-[10px] uppercase tracking-wider2 text-gold-400">{eyebrow}</div>
          <h3 className="font-display text-2xl lg:text-3xl mt-3 text-ink-800 leading-tight">{title}</h3>
        </div>
        <div className="text-right shrink-0">
          <div className="font-display text-3xl lg:text-4xl text-rose-400">{stat}</div>
          <div className="text-[10px] uppercase tracking-wider2 text-ink-400 mt-1">{statLabel}</div>
        </div>
      </div>
      <p className="mt-5 text-[15px] leading-relaxed text-ink-400 font-sansCN text-pretty">{body}</p>
    </div>
  );
}
