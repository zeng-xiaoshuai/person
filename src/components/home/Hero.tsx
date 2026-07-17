import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-24">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-50 via-ivory-100 to-ivory-200" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 -right-32 h-[700px] w-[700px] rounded-full bg-rose-200/40 blur-3xl animate-drift" />
        <div className="absolute -top-20 -left-40 h-[500px] w-[500px] rounded-full bg-gold-200/40 blur-3xl animate-drift" style={{ animationDelay: "-10s" }} />
      </div>

      <div className="absolute inset-0 bg-noise opacity-50 mix-blend-multiply pointer-events-none" />

      {/* Decorative SVG - abstract ovum */}
      <motion.div style={{ y: y1, scale }} className="absolute right-[8%] top-[18%] hidden md:block">
        <OvumDecor />
      </motion.div>

      <div className="container-wide relative pt-12 pb-24 lg:pt-20 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider2 text-ink-400 mb-8 font-sans">
            <span className="h-px w-12 bg-gold-400" />
            <span>RUISÉE 蕊安 · 辅助生殖与孕育健康</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-display-xl text-ink-800 leading-[0.92] tracking-tightish"
        >
          <span className="block">让每一颗心，</span>
          <span className="block italic">
            <span className="relative inline-block">
              都被温柔
              <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-rose-200/70 -z-10" />
            </span>
            {" "}以待
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
        >
          <div className="lg:col-span-5 lg:col-start-7">
            <p className="font-sansCN text-base lg:text-lg leading-relaxed text-ink-400 text-pretty">
              蕊安是一所专注于辅助生殖与女性孕育健康的国际化专科医院。我们将第三代试管婴儿、胚胎遗传学检测、冻卵、复发性流产诊治与心理支持，整合为一条完整而柔软的医疗路径——从第一次咨询，到第一次听到心跳。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/booking" className="btn-primary group">
                开始一次咨询
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </Link>
              <Link to="/services" className="btn-text text-ink-800">
                了解我们如何陪伴你
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Hero meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          style={{ y: y2 }}
          className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-ink-800/10 pt-10"
        >
          {[
            { v: "11", l: "年专业积淀" },
            { v: "12,000+", l: "成功 IVF 周期" },
            { v: "68.4%", l: "<35 岁妊娠率" },
            { v: "98.6%", l: "冻卵复苏率" },
          ].map((m) => (
            <div key={m.l} className="border-l border-ink-800/10 pl-5">
              <div className="font-display text-3xl lg:text-4xl text-ink-800">{m.v}</div>
              <div className="mt-2 text-xs uppercase tracking-wider2 text-ink-400 font-sans">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-wider2 text-ink-400"
      >
        <span>向下探索</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}

function OvumDecor() {
  return (
    <svg width="520" height="640" viewBox="0 0 520 640" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
      <defs>
        <radialGradient id="ovumG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3DCD9" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#E8C2BD" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C97B7B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nucleusG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B8956A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#9A7A52" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Outer membrane */}
      <circle cx="260" cy="320" r="240" stroke="#C97B7B" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.4" />
      <circle cx="260" cy="320" r="200" stroke="#B8956A" strokeWidth="0.5" opacity="0.5" />
      {/* Cytoplasm */}
      <circle cx="260" cy="320" r="170" fill="url(#ovumG)" />
      {/* Follicle cells */}
      {Array.from({ length: 28 }).map((_, i) => {
        const angle = (i / 28) * Math.PI * 2;
        const r = 215;
        const x = 260 + Math.cos(angle) * r;
        const y = 320 + Math.sin(angle) * r;
        return <circle key={i} cx={x} cy={y} r={6} fill="#E8D5D0" stroke="#C97B7B" strokeWidth="0.4" opacity="0.7" />;
      })}
      {/* Nucleus */}
      <circle cx="260" cy="320" r="80" fill="url(#nucleusG)" />
      <circle cx="260" cy="320" r="40" fill="#B8956A" opacity="0.4" />
      <circle cx="260" cy="320" r="6" fill="#2B2520" opacity="0.6" />
      {/* Spirals */}
      <path
        d="M 260 100 Q 380 180, 380 320 T 260 540"
        stroke="#B8956A"
        strokeWidth="0.4"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
