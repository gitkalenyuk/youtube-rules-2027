"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { animate, motion, useInView } from "motion/react";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({
  to,
  duration = 1.8,
  format,
  className,
}: {
  to: number;
  duration?: number;
  format?: (v: number) => string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {format ? format(val) : Math.round(val).toLocaleString("uk-UA")}
    </span>
  );
}

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = items.concat(items);
  return (
    <div className={cx("relative overflow-hidden", className)}>
      <div className="animate-marquee flex w-max items-center">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-8 text-sm font-semibold uppercase tracking-[0.22em] text-white/45"
          >
            {it}
            <span className="ml-8 text-brand">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
        {kicker}
      </span>
      <h2 className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, o: 0 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top, o: 1 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setSpot((s) => ({ ...s, o: 1 }))}
      onMouseLeave={() => setSpot((s) => ({ ...s, o: 0 }))}
      className={cx("glass card-glow relative overflow-hidden rounded-2xl", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spot.o,
          background:
            "radial-gradient(340px circle at " +
            spot.x +
            "px " +
            spot.y +
            "px, rgba(255,0,51,0.14), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora-blob absolute -left-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-brand/30 blur-[120px]" />
      <div
        className="aurora-blob absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet/30 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-magenta/25 blur-[110px]"
        style={{ animationDelay: "-12s" }}
      />
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ink" />
    </div>
  );
}

export function CtaButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-linear-to-r from-brand to-magenta text-white shadow-[0_10px_40px_-12px_rgba(255,0,51,0.7)]"
      : "glass text-white hover:bg-white/10";
  const cls = cx(base, styles, className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
