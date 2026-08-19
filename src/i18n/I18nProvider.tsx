"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  localeMeta,
  locales,
  type Dir,
  type LocaleCode,
} from "./locales";
import { messages, type Messages } from "./messages";

interface I18nContextValue {
  locale: LocaleCode;
  setLocale: (l: LocaleCode) => void;
  t: Messages;
  dir: Dir;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "yt2027-locale";

function detectLocale(): LocaleCode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && locales.some((l) => l.code === stored)) {
      return stored as LocaleCode;
    }
  } catch {
    /* ignore */
  }
  try {
    const nav =
      (navigator.languages && navigator.languages[0]) || navigator.language || "";
    const base = nav.split("-")[0].toLowerCase();
    const found = locales.find((l) => l.code === base);
    if (found) return found.code;
  } catch {
    /* ignore */
  }
  return defaultLocale;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(defaultLocale);

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  useEffect(() => {
    const meta = localeMeta(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = meta.dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const value: I18nContextValue = {
    locale,
    setLocale: setLocaleState,
    t: messages[locale],
    dir: localeMeta(locale).dir,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
