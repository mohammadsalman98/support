
// export const languages = ["en", "ar"] as const;
// export type Language = (typeof languages)[number];

// export const defaultLanguage: Language = "en";

// export function isValidLanguage(value: string): value is Language {
//   return languages.includes(value as Language);
// }

// export function getDirection(lang: Language) {
//   return lang === "ar" ? "rtl" : "ltr";
// }
export const languages = ["en", "ar", "ur", "hi", "bn", "ml"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

export function isValidLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function getDirection(lang: Language) {
  return lang === "ar" || lang === "ur" ? "rtl" : "ltr";
}