import { Link } from "react-router-dom";
import { ArrowUpRight, Award, Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const timeline = [
  { year: "2014", title: "蕊安创立", body: "在上海建立第一家生殖中心，由林书怀博士主导。" },
  { year: "2017", title: "通过 ISO 9001:2015", body: "成为亚洲首批通过 ISO 质量体系的辅助生殖实验室之一。" },
  { year: "2019", title: "北京、深圳分院成立", body: "服务覆盖华北与华南，提供本地化辅助生殖服务。" },
  { year: "2021", title: "PGT-M 资质获批", body: "成为可实施单基因病胚胎检测的少数机构之一。" },
  { year: "2023", title: "心蕊心理支持体系", body: "在 IVE 周期中提供全程心理支持，覆盖 5,000+ 小时。" },
  { year: "2025", title: "国际化拓展", body: "服务覆盖 38+ 个国家与地区，跨境医疗咨询全面升级。" },
];

const values = [
  { icon: Sparkles, title: "科学与精度", body: "全球顶尖设备、ISO 认证实验室、严谨质控。" },
  { icon: Leaf, title: "自然与平衡", body: "中医调理、生活方式干预，与现代医学并轨。" },
  { icon: ShieldCheck, title: "隐私与尊重", body: "独立诊室、电子病历双因素认证、绝对保密。" },
  { icon: Users, title: "陪伴与共情", body: "个案管理师、心理咨询师、24 小时支持。" },
];

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ivory-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-6">
              About · 05
            </div>
            <h1 className="font-display text-display-xl text-ink-800 leading-[0.95] max-w-4xl">
              <span className="block">我们相信，</span>
              <span className="block italic text-rose-400">医学的尽头是爱</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-400 font-sansCN text-pretty">
              蕊安 RUISÉE 是一所专注于辅助生殖与女性孕育健康的国际化专科医院。我们来自北京协和、上海集爱、复旦生殖中心等顶尖机构，怀着同一份初心：让每一对夫妇、每一位女性，都能被温柔地接住。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-ivory-200">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow text-gold-400">Our Values</span>
            <h2 className="font-display text-display-md mt-4 text-ink-800 leading-[1.05]">
              <span className="block">四个支点，</span>
              <span className="italic text-rose-400">撑起你脚下的路</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group rounded-4xl bg-ivory-50 p-8 border border-ink-800/8 h-full transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft">
                  <div className="h-14 w-14 rounded-2xl bg-ivory-200 group-hover:bg-rose-200 flex items-center justify-center transition-colors">
                    <v.icon size={22} strokeWidth={1.4} className="text-ink-800" />
                  </div>
                  <h3 className="font-display text-2xl mt-6 text-ink-800">{v.title}</h3>
                  <p className="mt-3 text-sm text-ink-400 font-sansCN leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ivory-100">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow text-gold-400">Our Journey</span>
            <h2 className="font-display text-display-md mt-4 text-ink-800 leading-[1.05]">
              <span className="block">十一年，</span>
              <span className="italic text-rose-400">与你一同走过</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink-800/15 to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className={i % 2 === 1 ? "lg:pl-12" : "lg:text-right lg:pr-12"}>
                      <div className="font-display text-5xl lg:text-7xl text-rose-300/70">{t.year}</div>
                    </div>
                    <div className="lg:pl-12">
                      <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-2">Milestone</div>
                      <h3 className="font-display text-2xl text-ink-800">{t.title}</h3>
                      <p className="mt-3 text-sm text-ink-400 font-sansCN leading-relaxed">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ivory-200">
        <div className="container-wide">
          <div className="rounded-4xl bg-ivory-50 p-10 lg:p-16 border border-ink-800/8">
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400 mb-4">Accreditation</div>
            <h2 className="font-display text-3xl lg:text-4xl text-ink-800 leading-tight">资质与荣誉</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {["ISO 9001:2015", "ESHRE 会员", "ASRM 会员", "国家辅助生殖技术评审", "上海市科委重点课题", "中华医学会生殖医学分会", "伦理委员会认证", "CAP 认证 (在申请)"].map((acc, i) => (
                <Reveal key={acc} delay={i * 0.04}>
                  <div className="flex items-center gap-3 text-sm text-ink-800">
                    <Award size={18} className="text-rose-400 shrink-0" />
                    <span className="font-sansCN">{acc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-800 text-ivory-100">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-display text-display-md text-ivory-100 leading-[1.05]">
            让我们<br /><span className="italic text-rose-300/90">认识彼此</span>
          </h2>
          <p className="mt-6 text-ivory-100/70 font-sansCN leading-relaxed">
            预约一次 60 分钟的免费咨询，了解你的情况、介绍可能的路径，不构成就医建议。
          </p>
          <Link to="/booking" className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-400 px-7 py-3.5 text-sm font-medium text-ivory-100 transition-all duration-500 hover:bg-rose-300 group">
            预约咨询
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </section>
    </>
  );
}
