import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { I18nProvider } from "@/i18n/I18nProvider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Нові правила YouTube 2027 — що змінюється для авторів",
  description:
    "З 1 лютого 2027 набувають чинності нові правила монетизації YouTube (YPP): пороги входу, зміни Shorts, Premium Lite та бонусні програми. Повний розбір з першоджерелами.",
  openGraph: {
    title: "Нові правила YouTube 2027",
    description:
      "Розбір нових правил монетизації YouTube, що діють з 1 лютого 2027 року.",
    type: "website",
    locale: "uk_UA",
    siteName: "Нові правила YouTube 2027",
  },
  twitter: {
    card: "summary_large_image",
    title: "Нові правила YouTube 2027",
    description:
      "Розбір нових правил монетизації YouTube, що діють з 1 лютого 2027 року.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={inter.variable + " " + manrope.variable + " h-full antialiased"}
    >
      <body className="min-h-full">
        <SmoothScroll />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
