// import type { ReactNode } from "react";
// import {
//   defaultLanguage,
//   getDirection,
//   isValidLanguage,
//   Language,
// } from "@/i18n/settings";

// export function generateStaticParams() {
//   return [{ lang: "en" }, { lang: "ar" }];
// }

// export default async function LangLayout({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: Promise<{ lang: string }>;
// }) {
//   const { lang } = await params;
//   const currentLang: Language = isValidLanguage(lang) ? lang : defaultLanguage;

//   return (
//     <html lang={currentLang} dir={getDirection(currentLang)}>
//       <body>{children}</body>
//     </html>
//   );
// }
import type { ReactNode } from "react";
import {
  defaultLanguage,
  getDirection,
  isValidLanguage,
  Language,
} from "@/i18n/settings";

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "ar" },
    { lang: "ur" },
    { lang: "hi" },
    { lang: "bn" },
    { lang: "ml" },
    { lang: "id" },
    { lang: "tr" },
    { lang: "sw" },
  ];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang: Language = isValidLanguage(lang) ? lang : defaultLanguage;

  return (
    <html lang={currentLang} dir={getDirection(currentLang)}>
      <body>{children}</body>
    </html>
  );
}
