import i18n, { Module } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import languageDetectorPlugin from "../locales/languageDetectorPlugin";
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};
i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin as Module)
  .init({
    resources,
    fallbackLng: "en",
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, //in case you have any suspense related errors
    },
  });
