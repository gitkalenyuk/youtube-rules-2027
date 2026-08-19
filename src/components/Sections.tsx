"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Crown,
  ExternalLink,
  Flame,
  Gift,
  Handshake,
  ShieldCheck,
  ShoppingBag,
  Target,
  Timer,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {
  AnimatedCounter,
  Marquee,
  Reveal,
  SectionHeading,
  SpotlightCard,
  cx,
} from "@/components/ui";
import { useI18n } from "@/i18n/I18nProvider";
import { premium, sources, targetedAdShare } from "@/content/rules";

function numFmt(locale: string, v: number) {
  return Math.round(v).toLocaleString(locale === "ar" ? "ar-u-nu-latn" : locale);
}

export function Ticker() {
  const { t } = useI18n();
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-5">
      <Marquee items={t.ticker} />
    </div>
  );
}

export function StatsBar() {
  const { t, locale } = useI18n();
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {t.stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.05} className="text-center">
            <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
              <AnimatedCounter
                to={s.value}
                format={(v) => s.prefix + numFmt(locale, v) + s.suffix}
              />
            </div>
            <div className="mx-auto mt-2 max-w-[14rem] text-xs leading-5 text-white/50">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const changeMeta = [
  { icon: TrendingUp, big: "2×", color: "text-brand" },
  { icon: Zap, big: "10M", color: "text-violet" },
  { icon: Crown, big: "60%", color: "text-magenta" },
  { icon: Target, big: "45%", color: "text-gold" },
  { icon: Gift, big: "✦", color: "text-mint" },
  { icon: ShieldCheck, big: "✓", color: "text-brand-soft" },
];

export function Changes() {
  const { t } = useI18n();
  return (
    <section id="changes" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t.changes.kicker}
          title={
            <>
              {t.changes.title1}{" "}
              <span className="text-gradient">{t.changes.titleHighlight}</span>
            </>
          }
          lead={t.changes.lead}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.changes.items.map((it, i) => {
            const meta = changeMeta[i];
            const Icon = meta.icon;
            return (
              <Reveal
                key={i}
                delay={i * 0.06}
                className={i < 2 ? "lg:col-span-2" : ""}
              >
                <SpotlightCard className="h-full p-6">
                  <div className="flex items-start justify-between">
                    <span
                      className={cx(
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5",
                        meta.color
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span
                      className={cx(
                        "font-display text-2xl font-extrabold",
                        meta.color
                      )}
                    >
                      {meta.big}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {it.text}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Compare() {
  const { t, locale } = useI18n();
  return (
    <section id="compare" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker={t.compare.kicker}
          title={
            <>
              {t.compare.title1}{" "}
              <span className="text-gradient">{t.compare.titleHighlight}</span>
            </>
          }
          lead={t.compare.lead}
        />
        <Reveal>
          <div className="glass-strong overflow-hidden rounded-3xl">
            <div className="grid grid-cols-2">
              <div className="border-r border-white/5 bg-white/[0.02] p-6 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {t.compare.colBefore}
                </div>
                <div className="mt-6 space-y-6">
                  {t.compare.rows.map((r, i) => (
                    <div key={i}>
                      <div className="text-sm text-white/45">{r.label}</div>
                      <div className="font-display mt-1 text-2xl font-extrabold text-white/50 md:text-3xl">
                        {r.before}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                  {t.compare.colAfter}
                </div>
                <div className="mt-6 space-y-6">
                  {t.compare.rows.map((r, i) => (
                    <div key={i}>
                      <div className="text-sm text-white/45">{r.label}</div>
                      <div className="font-display mt-1 text-2xl font-extrabold text-gradient md:text-3xl">
                        <AnimatedCounter
                          to={r.after}
                          format={(v) =>
                            r.afterSuffix
                              ? Math.round(v) + r.afterSuffix
                              : numFmt(locale, v)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm text-white/45">
            {t.compare.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Shorts() {
  const { t } = useI18n();
  return (
    <section id="shorts" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
            {t.shorts.kicker}
          </span>
          <h2 className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            {t.shorts.title1}{" "}
            <span className="text-gradient">{t.shorts.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            {t.shorts.paragraph}
          </p>
          <ul className="mt-6 space-y-3">
            {t.shorts.bullets.map((li, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white/65"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <SpotlightCard className="p-8 md:p-10">
            <div className="text-gradient font-display text-6xl font-extrabold md:text-7xl">
              <AnimatedCounter to={10} format={(v) => String(Math.round(v))} />
              {t.stats[1].suffix}
            </div>
            <p className="mt-2 text-sm text-white/50">{t.shorts.cardLabel}</p>
            <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full origin-left rounded-full bg-linear-to-r from-brand to-magenta"
              />
            </div>
            <div className="mt-3 flex justify-between text-xs text-white/40">
              <span>0</span>
              <span>{t.shorts.threshold}</span>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}

export function Premium() {
  const { t } = useI18n();
  return (
    <section id="premium" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t.premium.kicker}
          title={
            <>
              {t.premium.title1}{" "}
              <span className="text-gradient">{t.premium.titleHighlight}</span>
            </>
          }
          lead={t.premium.lead}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <SpotlightCard className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                {t.premium.litePool}
              </div>
              <div className="font-display mt-1 text-5xl font-extrabold text-gradient">
                {premium.litePoolShare}%
              </div>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {t.premium.liteText}
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                {t.premium.premiumPool}
              </div>
              <div className="font-display mt-1 text-5xl font-extrabold text-white">
                {premium.premiumPoolShare}%
              </div>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {t.premium.premiumText}
              </p>
            </SpotlightCard>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-gold" />
                <span className="font-display font-bold text-white">
                  {t.premium.targetedTitle}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {t.premium.targetedText}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard className="flex h-full flex-col items-center justify-center p-8">
              <div className="relative h-56 w-56">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#ff0033 0% " +
                      premium.longFormSplit +
                      "%, #8b5cf6 " +
                      premium.longFormSplit +
                      "% 100%)",
                  }}
                />
                <div className="absolute inset-[16%] flex flex-col items-center justify-center rounded-full bg-ink text-center">
                  <div className="font-display text-2xl font-extrabold text-white">
                    {premium.longFormSplit} / {premium.shortsSplit}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/45">
                    {t.premium.donutSub}
                  </div>
                </div>
              </div>
              <div className="mt-7 flex items-center justify-center gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-brand" />
                  {t.premium.legendLong}
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-violet" />
                  {t.premium.legendShorts}
                </span>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const bonusMeta = [ShoppingBag, Handshake, Flame];

export function Bonuses() {
  const { t } = useI18n();
  return (
    <section id="bonuses" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker={t.bonuses.kicker}
          title={
            <>
              {t.bonuses.title1}{" "}
              <span className="text-gradient">{t.bonuses.titleHighlight}</span>
            </>
          }
          lead={t.bonuses.lead}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {t.bonuses.items.map((b, i) => {
            const Icon = bonusMeta[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <SpotlightCard className="h-full p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand/20 to-magenta/20 text-brand-soft">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {b.text}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  const { t } = useI18n();
  return (
    <section id="timeline" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker={t.timeline.kicker}
          title={
            <>
              {t.timeline.title1}{" "}
              <span className="text-gradient">{t.timeline.titleHighlight}</span>
            </>
          }
        />
        <div className="relative">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-white/10" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-4 top-2 w-px origin-top bg-linear-to-b from-brand to-magenta"
            style={{ height: "calc(100% - 1rem)" }}
          />
          {t.timeline.items.map((item, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className="relative mb-10 pl-12 last:mb-0"
            >
              <span className="absolute left-[4px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-brand/40 bg-ink">
                <span className="animate-glow h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
                {item.date}
              </div>
              <h3 className="font-display mt-1 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-white/55">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoAffected() {
  const { t } = useI18n();
  return (
    <section id="affected" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker={t.affected.kicker}
          title={
            <>
              {t.affected.title1}{" "}
              <span className="text-gradient">{t.affected.titleHighlight}</span>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <SpotlightCard className="h-full p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                <Users className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-white">
                {t.affected.newTitle}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {t.affected.newText}
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard className="h-full p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/15 text-mint">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-white">
                {t.affected.existingTitle}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {t.affected.existingText}
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="glass mt-4 rounded-2xl p-6">
            <div className="flex items-center gap-3 text-white">
              <Timer className="h-5 w-5 text-brand" />
              <h4 className="font-display font-bold">
                {t.affected.activityTitle}
              </h4>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/55">
              {t.affected.activityText}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker={t.faq.kicker}
          title={
            <>
              {t.faq.title1}{" "}
              <span className="text-gradient">{t.faq.titleHighlight}</span>
            </>
          }
        />
        <div className="space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-white">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-white/50"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-6 text-white/60">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Sources() {
  const { t } = useI18n();
  return (
    <section id="sources" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          kicker={t.sources.kicker}
          title={
            <>
              {t.sources.title1}{" "}
              <span className="text-gradient">{t.sources.titleHighlight}</span>
            </>
          }
          lead={t.sources.lead}
        />
        <div className="space-y-3">
          {sources.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-glow flex items-center justify-between gap-4 rounded-2xl px-5 py-4"
              >
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white">
                    {s.title}
                  </div>
                  <div className="mt-0.5 truncate text-xs text-white/40">
                    {s.url}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span
                    className={cx(
                      "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
                      s.kind === "official"
                        ? "bg-brand/15 text-brand-soft"
                        : "bg-white/10 text-white/60"
                    )}
                  >
                    {s.kind === "official" ? t.sources.official : t.sources.media}
                  </span>
                  <ExternalLink className="h-4 w-4 text-white/40" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
