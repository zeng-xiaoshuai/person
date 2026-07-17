import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "首页", to: "/" },
  { label: "服务", to: "/services" },
  { label: "专家", to: "/doctors" },
  { label: "故事", to: "/stories" },
  { label: "知识", to: "/journal" },
  { label: "关于", to: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-ivory-100/80 border-b border-ink-800/5"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <Logo scrolled={scrolled} />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-tight text-ink-800">蕊安</div>
            <div className="font-sans text-[10px] tracking-wider2 text-ink-400 uppercase">RUISÉE</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-ink-800/8 bg-ivory-50/60 p-1 backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300",
                  isActive
                    ? "bg-ink-800 text-ivory-100"
                    : "text-ink-600 hover:text-ink-800 hover:bg-ivory-50"
                )
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="font-sans text-xs text-ink-400">400 · 866 · 0086</span>
          <Link to="/booking" className="btn-primary group">
            预约咨询
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <button
          className="lg:hidden rounded-full p-2.5 text-ink-800 border border-ink-800/10 bg-ivory-50/60 backdrop-blur"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-ivory-100 transition-all duration-500",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container-wide py-8 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "block border-b border-ink-800/8 py-5 font-display text-2xl",
                  isActive ? "text-rose-400" : "text-ink-800"
                )
              }
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-primary mt-8 self-start">
            预约咨询 <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="relative h-10 w-10 shrink-0">
      <svg viewBox="0 0 40 40" className="h-full w-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C97B7B" />
            <stop offset="100%" stopColor="#B8956A" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="none" stroke={scrolled ? "#2B2520" : "#2B2520"} strokeWidth="0.5" opacity="0.4" />
        <path
          d="M20 8 C 26 14, 30 18, 30 23 C 30 28, 25 32, 20 32 C 15 32, 10 28, 10 23 C 10 18, 14 14, 20 8 Z"
          fill="url(#logoGradient)"
          opacity="0.85"
        />
        <circle cx="20" cy="22" r="3" fill="#F8F4EE" />
      </svg>
    </div>
  );
}
