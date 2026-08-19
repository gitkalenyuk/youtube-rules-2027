"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";
import { cx } from "@/components/ui";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";

export function Logo() {
  return (
    <button
      type="button"
      onClick={() => scrollToSection("hero")}
      className="flex items-center gap-2.5"
      aria-label="Home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand to-magenta shadow-[0_6px_20px_-6px_rgba(255,0,51,0.7)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden>
          <path d="M9.5 8.5 16 12 9.5 15.5 Z" />
        </svg>
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-white">
        YT<span className="text-gradient">2027</span>
      </span>
    </button>
  );
}

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { id: "changes", label: t.nav.changes },
    { id: "compare", label: t.nav.compare },
    { id: "shorts", label: t.nav.shorts },
    { id: "premium", label: t.nav.premium },
    { id: "timeline", label: t.nav.timeline },
    { id: "faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(id: string) {
    setOpen(false);
    scrollToSection(id);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        className={cx(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        )}
      >
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => go("changes")}
            className="hidden rounded-full bg-linear-to-r from-brand to-magenta px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,0,51,0.8)] transition-transform hover:-translate-y-0.5 lg:block"
          >
            {t.nav.cta}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white md:hidden"
          aria-label={t.nav.menu}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mx-auto mt-2 flex max-w-6xl flex-col gap-2 rounded-2xl p-4 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </button>
            ))}
            <LanguageSwitcher className="px-1 pb-1" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
