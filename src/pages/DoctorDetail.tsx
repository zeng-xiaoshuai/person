import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Award, GraduationCap, Globe2, Calendar } from "lucide-react";
import { getDoctorById, doctors } from "@/data/doctors";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect } from "react";

export default function DoctorDetail() {
  const { id } = useParams<{ id: string }>();
  const doctor = id ? getDoctorById(id) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!doctor) return <Navigate to="/doctors" replace />;

  return (
    <>
      <section className="relative pt-32 pb-12 bg-ivory-100">
        <div className="container-wide">
          <Link to="/doctors" className="btn-text text-ink-400">
            <ArrowLeft size={14} /> 返回专家团队
          </Link>
        </div>
      </section>

      <section className="pb-24 bg-ivory-100">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="rounded-4xl overflow-hidden bg-ivory-200 aspect-[4/5]">
                <img src={doctor.avatar} alt={doctor.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 rounded-4xl bg-ivory-200 p-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <Calendar size={16} className="text-rose-400" />
                  <span className="font-sansCN">{doctor.schedule}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-600">
                  <Globe2 size={16} className="text-rose-400" />
                  <span className="font-sansCN">{doctor.languages.join(" · ")}</span>
                </div>
                <Link to="/booking" className="btn-primary w-full justify-center group mt-2">
                  预约 {doctor.name.split(" ")[0]} 医生
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-4">
                {doctor.years} 年临床经验
              </div>
              <h1 className="font-display text-display-lg text-ink-800 leading-[1.02]">{doctor.name}</h1>
              <div className="mt-3 text-base text-ink-400 font-sansCN">{doctor.title}</div>

              <div className="mt-6 flex flex-wrap gap-2">
                {doctor.specialty.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-ivory-200 text-ink-600">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            {doctor.quote && (
              <Reveal delay={0.1} className="mt-10">
                <blockquote className="font-display italic text-2xl lg:text-3xl text-rose-400 leading-snug border-l-2 border-rose-300 pl-6">
                  "{doctor.quote}"
                </blockquote>
              </Reveal>
            )}

            <Reveal delay={0.15} className="mt-12">
              <h2 className="font-display text-2xl text-ink-800 mb-5">关于</h2>
              <p className="text-[15px] leading-relaxed text-ink-400 font-sansCN text-pretty">{doctor.bio}</p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12">
              <h2 className="font-display text-2xl text-ink-800 mb-6 flex items-center gap-2">
                <Award size={18} className="text-rose-400" /> 学术成就
              </h2>
              <ul className="space-y-3">
                {doctor.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[15px] text-ink-600 font-sansCN">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ivory-200">
        <div className="container-wide">
          <h3 className="font-display text-3xl text-ink-800 mb-8">其他专家</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {doctors.filter((d) => d.id !== doctor.id).slice(0, 4).map((d) => (
              <Link key={d.id} to={`/doctors/${d.id}`} className="group block rounded-4xl bg-ivory-50 overflow-hidden border border-ink-800/8 transition-all duration-700 hover:border-rose-300/40">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={d.avatar} alt={d.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="font-display text-lg text-ink-800">{d.name}</div>
                  <div className="text-[11px] text-ink-400 font-sansCN mt-0.5">{d.title.split("·")[0]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
