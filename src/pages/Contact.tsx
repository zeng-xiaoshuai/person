import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const branches = [
  { city: "上海", address: "徐汇区淮海中路 1788 号 18F", phone: "021-5566 7788", hours: "周一至周日 8:00 - 20:00", tag: "总部" },
  { city: "北京", address: "朝阳区建国路 81 号华贸中心 3F", phone: "010-8518 2233", hours: "周一至周日 8:00 - 20:00", tag: "分院" },
  { city: "深圳", address: "福田区中心四路嘉里中心 T2 25F", phone: "0755-8622 0099", hours: "周一至周日 8:00 - 20:00", tag: "分院" },
  { city: "成都", address: "锦江区红星路 3 段 IFS 1 号楼 32F", phone: "028-8666 4400", hours: "周一至周日 8:00 - 20:00", tag: "分院" },
];

export default function Contact() {
  return (
    <>
      <section className="relative pt-40 pb-16 bg-ivory-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <Reveal>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-6">
              Contact · 06
            </div>
            <h1 className="font-display text-display-xl text-ink-800 leading-[0.95] max-w-4xl">
              <span className="block">我们在</span>
              <span className="block italic text-rose-400">这里等你</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-400 font-sansCN text-pretty">
              4 城分院，24 小时电话支持。预约咨询是完全免费的，我们不会向你推送任何广告。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-ivory-100">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <div className="rounded-4xl bg-ink-800 text-ivory-100 p-8 lg:p-10 space-y-7">
              <h2 className="font-display text-3xl">联系</h2>
              <div className="space-y-5 text-sm font-sansCN">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-rose-300 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-ivory-100/50 text-[10px] uppercase tracking-wider2 mb-1">服务热线</div>
                    <div className="text-base font-display">400 · 866 · 0086</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-rose-300 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-ivory-100/50 text-[10px] uppercase tracking-wider2 mb-1">海外</div>
                    <div className="text-base font-display">+86 21 5566 7788</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-rose-300 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-ivory-100/50 text-[10px] uppercase tracking-wider2 mb-1">邮件</div>
                    <div>hello@ruisee.health</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-rose-300 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-ivory-100/50 text-[10px] uppercase tracking-wider2 mb-1">咨询时间</div>
                    <div>每日 8:00 - 22:00</div>
                    <div className="text-xs text-ivory-100/50 mt-1">心理咨询 24h</div>
                  </div>
                </div>
              </div>
              <Link to="/booking" className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-400 px-6 py-3 text-sm font-medium text-ivory-100 transition-all hover:bg-rose-300 group">
                预约咨询
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </Reveal>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {branches.map((b, i) => (
              <Reveal key={b.city} delay={i * 0.08}>
                <div className="group relative rounded-4xl bg-ivory-50 border border-ink-800/8 p-7 h-full transition-all duration-700 hover:border-rose-300/40 hover:shadow-soft">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-sans text-[10px] uppercase tracking-wider2 text-gold-400 mb-1">
                        {b.tag}
                      </div>
                      <h3 className="font-display text-3xl text-ink-800">{b.city}</h3>
                    </div>
                    <MapPin size={20} className="text-rose-400" />
                  </div>
                  <p className="mt-4 text-sm text-ink-600 font-sansCN leading-relaxed">{b.address}</p>
                  <div className="mt-5 pt-5 border-t border-ink-800/8 space-y-2 text-sm text-ink-400 font-sansCN">
                    <div>{b.phone}</div>
                    <div className="text-xs">{b.hours}</div>
                  </div>
                  <div className="mt-6 aspect-[16/9] rounded-2xl overflow-hidden bg-ivory-200">
                    {/* Stylized map placeholder */}
                    <svg viewBox="0 0 320 180" className="h-full w-full">
                      <rect width="320" height="180" fill="#F1E9DD" />
                      <path d="M 0 90 Q 80 60, 160 90 T 320 90" stroke="#C97B7B" strokeWidth="1.5" fill="none" opacity="0.5" />
                      <path d="M 40 0 L 40 180" stroke="#B8956A" strokeWidth="0.5" opacity="0.4" />
                      <path d="M 200 0 L 200 180" stroke="#B8956A" strokeWidth="0.5" opacity="0.4" />
                      <path d="M 0 50 L 320 50" stroke="#B8956A" strokeWidth="0.5" opacity="0.4" />
                      <path d="M 0 130 L 320 130" stroke="#B8956A" strokeWidth="0.5" opacity="0.4" />
                      <circle cx="160" cy="90" r="6" fill="#C97B7B" />
                      <circle cx="160" cy="90" r="14" fill="none" stroke="#C97B7B" strokeWidth="0.5" opacity="0.4" />
                      <text x="172" y="95" fontFamily="Manrope" fontSize="9" fill="#2B2520">{b.city}</text>
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
