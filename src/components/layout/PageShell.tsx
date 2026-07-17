import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";

export function PageShell({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="relative min-h-screen bg-ivory-100 text-ink-800">
      <CursorGlow />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <div
        className={`fixed inset-0 z-[60] pointer-events-none bg-ivory-100 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mounted ? "-translate-y-full" : "translate-y-0"
        }`}
        aria-hidden
      />
    </div>
  );
}
