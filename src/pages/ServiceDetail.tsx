import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Check, Sparkles, Heart, Shield, Leaf, Feather, Orbit } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  shield: Shield,
  leaf: Leaf,
  feather: Feather,
  orbit: Orbit,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!service) return <Navigate to="/services" replace />;
  const Icon = iconMap[service.icon];

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-ivory-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <Link to="/services" className="btn-text text-ink-400 mb-12">
            <ArrowLeft size={14} /> 返回所有服务
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-4">
                  {service.tagline}
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ivory-50 border border-ink-800/8">
                    <Icon size={28} strokeWidth={1.3} className="text-rose-400" />
                  </div>
                  <h1 className="font-display text-display-lg text-ink-800 leading-[1.02]">{service.name}</h1>
                </div>
                <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-400 font-sansCN text-pretty">
                  {service.longDesc}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="lg:col-span-4">
              <div className="rounded-4xl bg-ivory-50 border border-ink-800/8 p-7 space-y-5">
                <Stat label="成功率" value={`${service.successRate}%`} />
                <div className="divider-gold" />
                <Stat label="周期时长" value={service.duration} small />
                <div className="divider-gold" />
                <Stat
                  label="参考费用"
                  value={`¥ ${service.priceRange.min.toLocaleString()} – ${service.priceRange.max.toLocaleString()}`}
                  small
                />
                <Link to="/booking" className="btn-primary w-full justify-center group">
                  预约咨询
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Suitable for */}
      <section className="py-16 bg-ivory-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="eyebrow text-gold-400">Suitable For</span>
              <h2 className="font-display text-3xl lg:text-4xl mt-4 text-ink-800 leading-tight">
                适合人群
              </h2>
              <p className="mt-4 text-sm text-ink-400 font-sansCN">
                我们的医师会在首诊时判断你属于哪一类情况，并提供个性化方案建议。
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-3">
              {service.suitableFor.map((s, i) => (
                <Reveal key={s} delay={i * 0.05}>
                  <div className="rounded-full bg-ivory-50 px-5 py-3 border border-ink-800/8 text-sm text-ink-800">
                    {s}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-ivory-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {service.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.08}>
                <div className="rounded-4xl bg-ivory-200 p-7 h-full">
                  <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400">0{i + 1}</div>
                  <div className="font-display text-xl mt-4 text-ink-800 leading-tight">{h}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-ivory-200">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow text-gold-400">The Process</span>
            <h2 className="font-display text-display-md mt-4 text-ink-800 leading-[1.05]">
              <span className="block">六步温柔路径，</span>
              <span className="italic text-rose-400">清晰可期</span>
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {service.process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.08}>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative h-6 w-6 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center z-10">
                        <span className="font-sans text-[10px] text-ivory-100 font-medium">{p.step}</span>
                      </div>
                      <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400">Step {p.step}</div>
                    </div>
                    <h3 className="font-display text-lg text-ink-800 leading-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-400 font-sansCN leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-ivory-100">
        <div className="container-narrow">
          <div className="mb-12">
            <span className="eyebrow text-gold-400">Common Questions</span>
            <h2 className="font-display text-display-md mt-4 text-ink-800 leading-[1.05]">
              关于 <span className="italic text-rose-400">{service.name}</span> 的常见疑问
            </h2>
          </div>
          <div className="space-y-3">
            {service.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group rounded-4xl bg-ivory-200 p-6 lg:p-8 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <h3 className="font-display text-lg lg:text-xl text-ink-800 flex-1 text-balance">{f.q}</h3>
                    <div className="h-8 w-8 rounded-full bg-ivory-50 flex items-center justify-center shrink-0 transition-transform duration-500 group-open:rotate-45">
                      <span className="text-ink-800 text-lg leading-none">+</span>
                    </div>
                  </summary>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-400 font-sansCN text-pretty">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-ivory-200">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <h3 className="font-display text-3xl text-ink-800">你可能还想了解</h3>
            <Link to="/services" className="btn-text text-ink-800">
              全部服务 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((o) => {
              const OIcon = iconMap[o.icon];
              return (
                <Link
                  key={o.slug}
                  to={`/services/${o.slug}`}
                  className="group rounded-4xl bg-ivory-50 p-7 border border-ink-800/8 transition-all duration-700 hover:border-rose-300/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ivory-200 group-hover:bg-rose-200 transition-colors">
                    <OIcon size={18} strokeWidth={1.4} />
                  </div>
                  <div className="mt-5 font-display text-xl text-ink-800">{o.name}</div>
                  <p className="mt-2 text-sm text-ink-400 font-sansCN line-clamp-2">{o.shortDesc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, small = false }: { label: string; value: string; small?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider2 text-ink-400">{label}</div>
      <div className={cn("mt-1 font-display text-ink-800", small ? "text-lg" : "text-3xl")}>{value}</div>
    </div>
  );
}
