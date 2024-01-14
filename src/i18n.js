import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import TranslationEn from './local/en.json';
import TranslationAr from './local/ar.json';

const savedLanguage = localStorage.getItem('language');
const defaultLanguage = savedLanguage || 'ar';


const resources = {
  en: {
    translation: TranslationEn
  },
  ar: {
    translation: TranslationAr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
