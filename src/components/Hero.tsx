"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { AuroraBackground, CtaButton } from "@/components/ui";
import { scrollToSection } from "@/components/SmoothScroll";
import { useI18n } from "@/i18n/I18nProvider";
import { EFFECTIVE_DATE } from "@/content/rules";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function useCountdown(target: string) {
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) {
        setT({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return t;
}

export default function Hero() {
  const { t } = useI18n();
  const c = useCountdown(EFFECTIVE_DATE);
  const units = [
    { v: c.days, label: t.hero.days },
    { v: c.hours, label: t.hero.hours },
    { v: c.mins, label: t.hero.minutes },
    { v: c.secs, label: t.hero.seconds },
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <AuroraBackground />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-36 text-center md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="font-display mt-7 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {t.hero.title1}{" "}
          <span className="text-gradient">{t.hero.titleHighlight}</span>{" "}
          {t.hero.title2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <CtaButton onClick={() => scrollToSection("changes")}>
            {t.hero.cta1} <ArrowRight className="h-4 w-4" />
          </CtaButton>
          <CtaButton variant="ghost" onClick={() => scrollToSection("compare")}>
            {t.hero.cta2}
          </CtaButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-14 w-full max-w-2xl"
        >
          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <div className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              <CalendarDays className="h-4 w-4 text-brand" />
              {t.hero.countdownTitle}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="rounded-2xl bg-white/5 px-2 py-4 text-center"
                >
                  <div className="font-display text-3xl font-extrabold tabular-nums text-white md:text-4xl">
                    {pad(u.v)}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-white/45">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
