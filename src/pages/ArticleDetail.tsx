import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getArticleById, articles } from "@/data/articles";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect } from "react";

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!article) return <Navigate to="/journal" replace />;

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="bg-ivory-100">
      <section className="relative pt-32 pb-12">
        <div className="container-wide">
          <Link to="/journal" className="btn-text text-ink-400">
            <ArrowLeft size={14} /> 返回知识专栏
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-narrow text-center">
          <Reveal>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400 mb-5">
              {article.category}
            </div>
            <h1 className="font-display text-display-lg text-ink-800 leading-[1.02] text-balance">
              {article.title}
            </h1>
            <p className="mt-6 text-lg text-ink-400 font-sansCN max-w-2xl mx-auto leading-relaxed text-pretty">
              {article.excerpt}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-xs text-ink-400 font-sansCN">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} 分钟阅读</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide">
          <Reveal className="aspect-[16/9] max-w-5xl mx-auto rounded-4xl overflow-hidden">
            <img src={article.cover} alt={article.title} className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container-narrow">
          <Reveal>
            <div>
              {article.content.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className={`font-sansCN text-[17px] leading-[1.9] text-ink-800 mb-6 ${
                    i === 0 ? "first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-rose-400" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-ivory-200">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-display text-3xl text-ink-800">延伸阅读</h3>
            <Link to="/journal" className="btn-text text-ink-800">专栏首页 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((a) => (
              <Link key={a.id} to={`/journal/${a.id}`} className="group rounded-4xl bg-ivory-50 border border-ink-800/8 overflow-hidden transition-all duration-700 hover:border-rose-300/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.cover} alt={a.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400 mb-2">{a.category}</div>
                  <div className="font-display text-lg text-ink-800 line-clamp-2">{a.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
