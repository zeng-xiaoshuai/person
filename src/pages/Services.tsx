import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Heart, Shield, Leaf, Feather, Orbit } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/lib/types";

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  shield: Shield,
  leaf: Leaf,
  feather: Feather,
  orbit: Orbit,
};

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-ivory-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-6">
              Services · 01
            </div>
            <h1 className="font-display text-display-xl text-ink-800 leading-[0.95] max-w-4xl">
              <span className="block">六条路径，</span>
              <span className="block italic text-rose-400">汇向同一个起点。</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-400 font-sansCN text-pretty">
              蕊安将辅助生殖的所有关键环节整合为清晰的六条路径。每一项服务都由专门的主诊医师与个案管理师负责，全程可追溯。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-ivory-200">
        <div className="container-wide space-y-5">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon];
  return (
    <Reveal delay={index * 0.05}>
      <Link
        to={`/services/${service.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-10 rounded-4xl bg-ivory-50 p-8 lg:p-10 border border-ink-800/8 transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft"
      >
        <div className="lg:col-span-1 font-sans text-xs text-ink-400 tabular-nums">
          0{index + 1}
        </div>
        <div className="lg:col-span-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-ivory-200 group-hover:bg-rose-200 transition-colors">
          <Icon size={20} strokeWidth={1.4} />
        </div>
        <div className="lg:col-span-4">
          <div className="font-display italic text-xs text-gold-400 mb-1">{service.tagline}</div>
          <h3 className="font-display text-2xl lg:text-3xl text-ink-800">{service.name}</h3>
        </div>
        <div className="lg:col-span-4 text-sm text-ink-400 font-sansCN leading-relaxed">
          {service.shortDesc}
        </div>
        <div className="lg:col-span-2 flex flex-col items-end">
          <div className="text-[10px] uppercase tracking-wider2 text-ink-400">成功率</div>
          <div className="font-display text-2xl text-ink-800">{service.successRate}%</div>
        </div>
        <div className="lg:col-span-12 flex items-center justify-between border-t border-ink-800/8 pt-6">
          <div className="flex flex-wrap gap-2">
            {service.suitableFor.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] tracking-wider2 px-2.5 py-1 rounded-full bg-ivory-200 text-ink-600">
                {t}
              </span>
            ))}
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-200 group-hover:bg-ink-800 group-hover:text-ivory-100 transition-all duration-500">
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function CtaBand() {
  return (
    <section className="py-24 bg-ivory-100">
      <div className="container-wide">
        <div className="rounded-4xl bg-ivory-200 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl lg:text-4xl text-ink-800 leading-tight">
              不确定哪条路径适合你？
            </h3>
            <p className="mt-3 text-ink-400 font-sansCN">60 分钟免费咨询，个案管理师为你梳理方向。</p>
          </div>
          <Link to="/booking" className="btn-primary group shrink-0">
            开始咨询
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </section>
  );
}
