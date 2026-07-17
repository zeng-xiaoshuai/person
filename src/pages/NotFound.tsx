import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-40 pb-32 bg-ivory-100 min-h-[80vh] flex items-center">
      <div className="container-narrow text-center">
        <div className="font-display italic text-[20vw] leading-none text-rose-200">404</div>
        <h1 className="font-display text-display-md text-ink-800 leading-[1.05]">
          这条路，<br /><span className="italic text-rose-400">暂时还走不通</span>
        </h1>
        <p className="mt-6 text-ink-400 font-sansCN">或许你要找的内容已迁移。回到首页继续探索吧。</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-800 px-6 py-3 text-sm font-medium text-ivory-100 transition-all hover:bg-rose-400 group">
          回到首页
          <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </section>
  );
}
