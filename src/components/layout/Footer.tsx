import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const linkGroups = [
  {
    title: "服务",
    items: [
      { label: "试管婴儿 IVF", to: "/services/ivf" },
      { label: "人工授精 IUI", to: "/services/iui" },
      { label: "冻卵 · 生育力保存", to: "/services/egg-freezing" },
      { label: "胚胎遗传学检测 PGT", to: "/services/pgt" },
      { label: "复发性流产诊治", to: "/services/rpl" },
      { label: "孕前调理", to: "/services/fertility-care" },
    ],
  },
  {
    title: "走进蕊安",
    items: [
      { label: "专家团队", to: "/doctors" },
      { label: "成功案例", to: "/stories" },
      { label: "孕育知识", to: "/journal" },
      { label: "关于医院", to: "/about" },
      { label: "联系分院", to: "/contact" },
    ],
  },
  {
    title: "服务热线",
    items: [
      { label: "中国 400 · 866 · 0086", to: "/contact" },
      { label: "海外 +86 21 5566 7788", to: "/contact" },
      { label: "心理支持 24h", to: "/contact" },
      { label: "紧急就诊通道", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ink-800 text-ivory-100 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gold-400/20 blur-3xl" />
      </div>

      <div className="container-wide relative py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="font-display text-display-md text-ivory-100 leading-[0.95]">
              <span className="block">每一颗心，</span>
              <span className="block italic text-rose-300/80">都被温柔以待</span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory-100/60 font-sansCN">
              蕊安 RUISÉE 致力于打造亚洲最具人文关怀的辅助生殖专科医院。我们相信，科技的温度，源于对人本身的理解。
            </p>
            <Link to="/booking" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivory-100 px-6 py-3 text-sm font-medium text-ink-800 transition-all duration-500 hover:bg-rose-300 hover:text-ink-800 group">
              预约一次温柔的咨询
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <div className="font-sans text-[11px] tracking-wider2 uppercase text-ivory-100/40 mb-5">
                  {group.title}
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="text-sm text-ivory-100/80 hover:text-rose-300 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory-100/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ivory-100/50 font-sans">
          <div>© 2025 蕊安辅助生殖医院 RUISÉE Reproductive Health. 沪卫医广证字 [2025] 第 0158 号</div>
          <div className="flex gap-6">
            <span>隐私政策</span>
            <span>伦理委员会</span>
            <span>患者权益</span>
          </div>
        </div>

        <div className="mt-12 font-display text-[18vw] leading-none text-ivory-100/5 select-none">
          RUISÉE
        </div>
      </div>
    </footer>
  );
}
