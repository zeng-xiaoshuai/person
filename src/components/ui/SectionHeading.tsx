import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  link?: { label: string; to: string };
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, link, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <span className="eyebrow text-gold-400">{eyebrow}</span>}
      <h2 className="font-display text-display-md mt-4 text-balance text-ink-800">{title}</h2>
      {description && (
        <p className="font-sansCN mt-5 max-w-2xl text-base leading-relaxed text-ink-400 text-pretty">
          {description}
        </p>
      )}
      {link && (
        <Link to={link.to} className="btn-text mt-6 text-rose-400">
          {link.label}
          <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
        </Link>
      )}
    </div>
  );
}
