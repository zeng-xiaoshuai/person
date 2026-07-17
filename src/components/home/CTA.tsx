import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-36 bg-ivory-100 overflow-hidden">
      <div className="container-wide">
        <div className="relative rounded-5xl overflow-hidden bg-ink-800 text-ivory-100 px-8 py-16 lg:px-20 lg:py-28">
          {/* Decorative orbs */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl animate-soft-pulse" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-gold-400/15 blur-3xl animate-soft-pulse" style={{ animationDelay: "-3s" }} />
          </div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="font-sans text-[10px] uppercase tracking-wider2 text-ivory-100/50 mb-6">
                The Next Step
              </div>
              <h2 className="font-display text-display-md text-ivory-100 leading-[1.02] text-balance">
                迈出第一步，<br />
                <span className="italic text-rose-300/90">让我们陪你走完剩下的</span>
              </h2>
              <p className="mt-6 max-w-lg text-base text-ivory-100/70 font-sansCN leading-relaxed">
                预约一次 60 分钟的免费咨询。我们的个案管理师会倾听你的情况，介绍适合你的路径，并完全尊重你的节奏。
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/booking"
                  className="group inline-flex items-center gap-2 rounded-full bg-rose-400 px-7 py-3.5 text-sm font-medium text-ivory-100 transition-all duration-500 hover:bg-rose-300 hover:-translate-y-0.5"
                >
                  预约一次咨询
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </Link>
                <a
                  href="tel:4008660086"
                  className="group inline-flex items-center gap-2 rounded-full border border-ivory-100/20 px-7 py-3.5 text-sm font-medium text-ivory-100 transition-all duration-500 hover:bg-ivory-100 hover:text-ink-800"
                >
                  <Phone size={14} />
                  拨打 400 · 866 · 0086
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-4xl bg-ivory-100/5 backdrop-blur-sm p-7 border border-ivory-100/10">
                <div className="font-sans text-[10px] uppercase tracking-wider2 text-gold-300 mb-4">
                  What to Expect
                </div>
                <ul className="space-y-4 text-sm text-ivory-100/80 font-sansCN">
                  {[
                    "60 分钟一对一咨询",
                    "完全保密的环境",
                    "个案管理师全程陪伴",
                    "不构成就医建议，无消费压力",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-300 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
