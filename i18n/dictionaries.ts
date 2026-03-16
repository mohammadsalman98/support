
import "server-only";
import { defaultLanguage, Language } from "./settings";

import en from "./locales/en.json";
import ar from "./locales/ar.json";
import ur from "./locales/ur.json";
import hi from "./locales/hi.json";
import bn from "./locales/bn.json";
import ml from "./locales/ml.json";
import id from "./locales/id.json";
import tr from "./locales/tr.json";
import sw from "./locales/sw.json";
import ha from "./locales/ha.json";
import ff from "./locales/ff.json";
import kr from "./locales/kr.json";

// const dictionaries: Record<Language, Dictionary> = {
//   en: en as Dictionary,
//   ar: ar as Dictionary,
//   ur: ur as Dictionary,
//   hi: hi as Dictionary,
//   bn: bn as Dictionary,
//   ml: ml as Dictionary,
//   id: id as Dictionary,
//   tr: tr as Dictionary,
//   sw: sw as Dictionary,
//   ha: ha as Dictionary,
//   ff: ff as Dictionary,
//   kr: kr as Dictionary,

// };


export type Dictionary = {
  nav: {
    support: string;
    about: string;
    contact: string;
  };
  supportPage: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    extra: string;
    heroNote: string;
    ctaPrimary: string;
    ctaSecondary: string;
    logoLabel: string;
    featuresTitle: string;
    feature1Title: string;
    feature1Text: string;
    feature2Title: string;
    feature2Text: string;
    feature3Title: string;
    feature3Text: string;
    sectionTitle: string;
    sectionText: string;
    contactTitle: string;
    contactText: string;
    statsTitle: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    helpTitle: string;
    help1: string;
    help2: string;
    help3: string;
    help4: string;
  };
};


const dictionaries: Record<Language, Dictionary> = {
  en: en as Dictionary,
  ar: ar as Dictionary,
  ur: ur as Dictionary,
  hi: hi as Dictionary,
  bn: bn as Dictionary,
  ml: ml as Dictionary,
  id: id as Dictionary,
  tr: tr as Dictionary,
  sw: sw as Dictionary,
  ha: ha as Dictionary,
  ff: ff as Dictionary,
  kr: kr as Dictionary,
};

export function getDictionary(lang: string): Dictionary {
  return dictionaries[lang as Language] ?? dictionaries[defaultLanguage];
}