import { getDictionary } from "@/i18n/dictionaries";
import { defaultLanguage, isValidLanguage, Language } from "@/i18n/settings";
import { Navbar } from "./_components/navbar";
import { SupportHero } from "./_components/support-hero";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang: Language = isValidLanguage(lang) ? lang : defaultLanguage;
  const dictionary = getDictionary(currentLang);

  return (
    <main>
      <Navbar lang={currentLang} dictionary={dictionary} />
      <SupportHero dictionary={dictionary} />
    </main>
  );
}
