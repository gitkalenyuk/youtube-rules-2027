"use client";

import { Logo } from "@/components/Navbar";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <p className="max-w-md text-center text-sm leading-6 text-white/45 md:text-right">
          {t.footer.disclaimer}
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-white/35">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
