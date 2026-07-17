import { motion, useReducedMotion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "span" | "li" | "article";
}

export function Reveal({ children, className, delay = 0, y = 24, duration = 1.1, as = "div" }: RevealProps) {
  const reduced = useReducedMotion();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      initial={reduced ? false : { opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
}
