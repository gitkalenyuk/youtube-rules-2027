export interface Source {
  title: string;
  url: string;
  kind: "official" | "media";
}

export const EFFECTIVE_DATE = "2027-02-01T00:00:00Z";
export const TERMS_DEADLINE = "2027-01-31T00:00:00Z";
export const ANNOUNCE_DATE = "10 серпня 2026";

export const entryThresholds = {
  before: { subscribers: 1000, watchHours: 4000, shortsViews: 10_000_000 },
  after: { subscribers: 1000, watchHours: 8000, shortsViews: 20_000_000 },
};

export const shortsPoolMin = 10_000_000;

export const fanFunding = {
  subscribers: 500,
  watchHours: 3000,
  shortsViews: 3_000_000,
};

export const premium = {
  litePoolShare: 60,
  premiumPoolShare: 30,
  longFormSplit: 55,
  shortsSplit: 45,
};

export const targetedAdShare = 45;

export const activity = {
  watchHours: 1000,
  shortsViews: 1_000_000,
  uploads: "2 long-form або 5 Shorts за 90 днів",
};

export const stats = [
  { value: 8000, prefix: "", suffix: " годин", label: "новий поріг входу (було 4 000)" },
  { value: 20, prefix: "", suffix: " млн", label: "переглядів Shorts — новий поріг (було 10 млн)" },
  { value: 10, prefix: "", suffix: " млн", label: "переглядів Shorts/90 дн — мінімум для Creator Pool" },
  { value: 100, prefix: "$", suffix: "+ млрд", label: "виплачено авторам за останні 4 роки" },
];

export const timeline = [
  { date: "10 серпня 2026", title: "Анонс", text: "YouTube оголосив перші суттєві зміни YPP з 2018 року." },
  { date: "31 січня 2027", title: "Дедлайн", text: "Прийміть нові умови в YouTube Studio, щоб не втратити заробіток." },
  { date: "1 лютого 2027", title: "Старт", text: "Нові правила набувають чинності для всіх авторів." },
];

export const faq = [
  { q: "Кого зачіпають нові пороги входу в YPP?", a: "Тільки нових авторів, які подають заявку після 1 лютого 2027 року. Чинні учасники YPP залишаються в програмі незалежно від нових цифр." },
  { q: "Скільки тепер потрібно для входу в YPP?", a: "1 000 підписників + 8 000 годин перегляду за 365 днів АБО 20 млн переглядів Shorts за 90 днів." },
  { q: "Що змінюється для Shorts?", a: "Щоб отримувати дохід із Shorts Creator Pool щомісяця, потрібно підтримувати 10 млн переглядів Shorts за 90 днів. Нижче порогу ви залишаєтесь у YPP і далі заробляєте на long-form." },
  { q: "Що з Fan Funding і Shopping?", a: "Пороги не змінюються: 500 підписників + 3 000 годин перегляду або 3 млн переглядів Shorts за 90 днів." },
  { q: "Що таке Premium Lite і як він впливає на дохід?", a: "Premium Lite розширюють на всі країни з Premium. Автори ділять пул: 60% нетто-доходу Premium Lite і 30% Premium; розподіл — 55% long-form і 45% Shorts." },
  { q: "Що буде, якщо не прийняти нові умови до 31 січня 2027?", a: "З 1 лютого 2027 ви перестанете заробляти на відповідних функціях монетизації, доки не приймете умови в YouTube Studio. Статус у YPP при цьому не втрачається." },
  { q: "Це точно про монетизацію, а не про правила спільноти?", a: "Так. Анонсовані зміни стосуються YouTube Partner Program (монетизації). Правила спільноти та контенту цим анонсом не переглядалися." },
];

export const sources: Source[] = [
  { title: "YouTube Help — Changes to the YouTube Partner Program", url: "https://support.google.com/youtube/answer/12843009", kind: "official" },
  { title: "YouTube Official Blog — New opportunities to earn and changes to YPP", url: "https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn", kind: "official" },
  { title: "The Verge — YouTube is making it harder to earn money", url: "https://www.theverge.com/streaming/977474/youtube-partner-program-new-requirements", kind: "media" },
  { title: "vidIQ — YouTube Monetization Requirements 2027", url: "https://vidiq.com/blog/post/youtube-partner-program-changes-2027", kind: "media" },
  { title: "Social Media Today — YouTube announces changes to creator monetization", url: "https://www.socialmediatoday.com/news/youtube-announces-changes-to-creator-monetization/827515", kind: "media" },
];
