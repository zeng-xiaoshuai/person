import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DoctorsRow() {
  const trackRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative py-24 lg:py-36 bg-ivory-100 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Our Specialists"
            title={
              <>
                每一位专家，<br />
                <span className="italic text-rose-400">都曾走过你的路</span>
              </>
            }
            description="蕊安的医师团队，平均从业 16 年。他们既是医生，也是倾听者、陪伴者。"
          />
          <Link to="/doctors" className="btn-ghost group shrink-0">
            查看全部专家
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      <div ref={trackRef} className="relative">
        <div className="flex gap-6 overflow-x-auto pb-6 px-6 lg:px-10 snap-x snap-mandatory scrollbar-none" style={{ scrollbarWidth: "none" }}>
          <div className="shrink-0 w-[calc((100vw-1400px)/2+24px)] hidden xl:block" />
          {doctors.map((d, i) => (
            <DoctorCard key={d.id} doctor={d} index={i} />
          ))}
          <div className="shrink-0 w-6 lg:w-10" />
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ doctor, index }: { doctor: (typeof doctors)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="shrink-0 w-[300px] lg:w-[340px] snap-start">
      <Link to={`/doctors/${doctor.id}`} className="group block">
        <div className="relative overflow-hidden rounded-4xl bg-ivory-50 aspect-[3/4] mb-5">
          <div className="absolute inset-0 bg-gradient-to-t from-ink-800/40 via-transparent to-transparent z-10" />
          <img
            src={doctor.avatar}
            alt={doctor.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ivory-100/80 backdrop-blur group-hover:bg-rose-400 group-hover:text-ivory-100 transition-all duration-500">
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </div>
          <div className="absolute top-4 left-4 z-20 font-sans text-[10px] uppercase tracking-wider2 text-ivory-100/80">
            0{index + 1}
          </div>
        </div>
        <div className="px-1">
          <div className="font-display text-2xl text-ink-800">{doctor.name}</div>
          <div className="mt-1 text-xs text-ink-400 font-sansCN">{doctor.title}</div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {doctor.specialty.slice(0, 2).map((s) => (
              <span key={s} className="inline-block text-[10px] tracking-wider2 px-2 py-1 rounded-full bg-ivory-200 text-ink-600">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-3 font-sans text-[10px] uppercase tracking-wider2 text-gold-400">
            {doctor.years} 年临床经验
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
