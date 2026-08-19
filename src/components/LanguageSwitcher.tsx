"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { locales, type LocaleCode } from "@/i18n/locales";
import { cx } from "@/components/ui";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  return (
    <div className={cx("relative", className)}>
      <Languages className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as LocaleCode)}
        aria-label="Language"
        className="w-full appearance-none rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-8 text-sm font-medium text-white outline-none transition-colors hover:bg-white/10 focus:border-brand/60 md:w-auto"
      >
        {locales.map((l) => (
          <option key={l.code} value={l.code} className="bg-ink text-white">
            {l.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
        ▾
      </span>
    </div>
  );
}
