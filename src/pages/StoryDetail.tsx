import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getStoryById, stories } from "@/data/stories";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect } from "react";

export default function StoryDetail() {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!story) return <Navigate to="/stories" replace />;

  return (
    <article className="bg-ivory-100">
      <section className="relative pt-32 pb-12">
        <div className="container-wide">
          <Link to="/stories" className="btn-text text-ink-400">
            <ArrowLeft size={14} /> 返回所有故事
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-narrow">
          <Reveal>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider2 text-ink-400 mb-6">
              <span className="px-3 py-1 rounded-full bg-ivory-200">{story.service}</span>
              <span>{story.year}</span>
              <span>·</span>
              <span>{story.couple} · {story.city}</span>
            </div>
            <h1 className="font-display text-display-lg lg:text-display-xl text-ink-800 leading-[1] text-balance">
              {story.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base text-ink-400 font-sansCN leading-relaxed">
              {story.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide">
          <Reveal className="aspect-[16/9] rounded-4xl overflow-hidden">
            <img src={story.cover} alt={story.title} className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container-narrow">
          <Reveal>
            <div className="prose prose-lg max-w-none">
              {story.content.split("\n\n").map((p, i) => (
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

      {story.babyName && (
        <section className="py-12 bg-ivory-200">
          <div className="container-narrow text-center">
            <Reveal>
              <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-4">
                Their Miracle
              </div>
              <div className="font-display italic text-4xl lg:text-5xl text-rose-400">
                {story.babyName}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-display text-3xl text-ink-800">其他故事</h3>
            <Link to="/stories" className="btn-text text-ink-800">全部 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stories.filter((s) => s.id !== story.id).slice(0, 3).map((s) => (
              <Link key={s.id} to={`/stories/${s.id}`} className="group rounded-4xl bg-ivory-50 border border-ink-800/8 overflow-hidden transition-all duration-700 hover:border-rose-300/40">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.cover} alt={s.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg text-ink-800 line-clamp-2">{s.title}</div>
                  <div className="text-[11px] text-ink-400 mt-2">{s.couple} · {s.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
