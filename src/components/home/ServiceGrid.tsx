import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

export function ServiceGrid() {
  return (
    <section className="relative py-24 lg:py-36 bg-ivory-100">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Offer"
            title={
              <>
                完整的孕育路径，<br />
                <span className="italic text-rose-400">由你来选择起点</span>
              </>
            }
            description="从预防性冻卵到第三代试管，从反复流产诊治到中医调理，蕊安将所有环节整合在同一个屋檐下，让你的每一次转诊都不再是孤身作战。"
          />
          <Link to="/services" className="btn-ghost group shrink-0">
            浏览所有服务
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon];
  return (
    <Reveal delay={index * 0.08}>
      <Link to={`/services/${service.slug}`} className="group block h-full">
        <div className="relative h-full rounded-4xl bg-ivory-50 p-8 lg:p-10 border border-ink-800/8 transition-all duration-700 hover:bg-ivory-50 hover:border-rose-300/40 hover:shadow-soft overflow-hidden">
          {/* hover gradient */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-rose-100/30 to-transparent pointer-events-none" />

          <div className="relative flex items-start justify-between mb-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory-200 group-hover:bg-rose-200 transition-colors duration-700">
              <Icon size={22} strokeWidth={1.4} className="text-ink-800" />
            </div>
            <div className="text-right">
              <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400">0{index + 1}</div>
            </div>
          </div>

          <div className="relative">
            <div className="font-display italic text-xs text-gold-400 mb-3">{service.tagline}</div>
            <h3 className="font-display text-2xl lg:text-3xl text-ink-800 leading-tight">{service.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-400 font-sansCN text-pretty">
              {service.shortDesc}
            </p>
          </div>

          <div className="relative mt-8 flex items-center justify-between border-t border-ink-800/8 pt-6">
            <div>
              <div className="text-[10px] uppercase tracking-wider2 text-ink-400">成功率</div>
              <div className="font-display text-2xl text-ink-800 mt-1">{service.successRate}<span className="text-sm text-ink-400">%</span></div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory-200 group-hover:bg-ink-800 group-hover:text-ivory-100 transition-all duration-500">
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
