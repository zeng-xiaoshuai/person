import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Marquee() {
  const items = [
    "RUISÉE 蕊安",
    "The Quiet Beginning",
    "Quiet the Garden",
    "Time, in a Glass",
    "Hold the Thread",
    "Read the Stars",
  ];
  const [hover, setHover] = useState(false);
  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative py-10 bg-ivory-100 border-y border-ink-800/8 overflow-hidden"
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-12 pr-12"
          animate={{ x: hover ? ["0%", "-50%"] : ["0%", "-50%"] }}
          transition={{ duration: hover ? 30 : 60, ease: "linear", repeat: Infinity }}
        >
          {[...items, ...items, ...items].map((it, i) => (
            <span key={i} className="flex items-center gap-12 font-display italic text-2xl lg:text-3xl text-ink-800/80">
              {it}
              <span className="inline-block h-2 w-2 rounded-full bg-rose-400" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
