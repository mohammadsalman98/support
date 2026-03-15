"use client";

import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent } from "react";
import { languages, Language } from "@/i18n/settings";

type Props = {
  currentLang: Language;
};

const labels: Record<Language, string> = {
  en: "English",
  ar: "العربية",
  ur: "اردو",
  hi: "हिन्दी",
  bn: "বাংলা",
  ml: "മലയാളം",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
  sw: "Kiswahili",
};

const shortLabels: Record<Language, string> = {
  en: "EN",
  ar: "AR",
  ur: "UR",
  hi: "HI",
  bn: "BN",
  ml: "ML",
  id: "ID",
  tr: "TR",
  sw: "SW",
};
export function LanguageSwitcher({ currentLang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const getLocalizedPath = (nextLang: Language) => {
    if (!pathname) return `/${nextLang}`;

    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${nextLang}`;
    }

    if (languages.includes(segments[0] as Language)) {
      segments[0] = nextLang;
    } else {
      segments.unshift(nextLang);
    }

    return `/${segments.join("/")}`;
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLang = event.target.value as Language;
    router.push(getLocalizedPath(nextLang));
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        minWidth: "180px",
      }}
    >
      <select
        value={currentLang}
        onChange={handleChange}
        aria-label="Select language"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          width: "100%",
          padding: "12px 46px 12px 48px",
          borderRadius: "16px",
          border: "1px solid rgba(0,0,0,0.08)",
          background: "linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)",
          color: "#111",
          fontSize: "14px",
          fontWeight: 700,
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          transition: "all 0.2s ease",
        }}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {labels[lang]}
          </option>
        ))}
      </select>

      <div
        style={{
          position: "absolute",
          insetInlineStart: "10px",
          width: "28px",
          height: "28px",
          borderRadius: "999px",
          background: "#FDCF50",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          fontWeight: 800,
          color: "#111",
          pointerEvents: "none",
          boxShadow: "0 6px 16px rgba(253, 207, 80, 0.35)",
        }}
      >
        {shortLabels[currentLang]}
      </div>

      <div
        style={{
          position: "absolute",
          insetInlineEnd: "12px",
          width: "24px",
          height: "24px",
          borderRadius: "999px",
          background: "rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          color: "#444",
          fontSize: "11px",
        }}
      >
        ▼
      </div>
    </div>
  );
}
