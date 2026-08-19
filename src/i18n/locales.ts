export const locales = [
  { code: "uk", label: "Українська", short: "UA", dir: "ltr" },
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "ru", label: "Русский", short: "RU", dir: "ltr" },
  { code: "es", label: "Español", short: "ES", dir: "ltr" },
  { code: "de", label: "Deutsch", short: "DE", dir: "ltr" },
  { code: "fr", label: "Français", short: "FR", dir: "ltr" },
  { code: "pl", label: "Polski", short: "PL", dir: "ltr" },
  { code: "pt", label: "Português", short: "PT", dir: "ltr" },
  { code: "tr", label: "Türkçe", short: "TR", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
] as const;

export type LocaleCode = (typeof locales)[number]["code"];
export type Dir = "ltr" | "rtl";

export const defaultLocale: LocaleCode = "uk";

export function localeMeta(code: LocaleCode) {
  return locales.find((l) => l.code === code) ?? locales[0];
}
