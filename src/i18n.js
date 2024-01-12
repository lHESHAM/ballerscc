import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import TranslationEn from './local/en.json';
import TranslationAr from './local/ar.json';

const resources = {
  en: {
    translation: TranslationEn
  },
  ar: {
    translation: TranslationAr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false,
    }
  });

// Listen for language changes
// i18n.on('languageChanged', (lng) => {
//   document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
// });

export default i18n;
