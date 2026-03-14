import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";
import { Language } from "@/i18n/settings";
import { LanguageSwitcher } from "./language-switcher";

type Props = {
  lang: Language;
  dictionary: Dictionary;
};

export function Navbar({ lang }: Props) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(14px)",
        background: "rgba(255,255,255,0.82)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <Link
          href={`/${lang}`}
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Image
            width={120}
            height={22}
            src="/logo.png"
            alt="Miqdar logo"
            style={{ width: "120px", height: "auto", objectFit: "contain" }}
          />
        </Link>

        <LanguageSwitcher currentLang={lang} />
      </div>
    </nav>
  );
}
