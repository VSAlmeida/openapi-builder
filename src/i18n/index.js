import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { enUsTranslations, esTranslations, ptBrTranslations } from './locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': enUsTranslations,
      es: esTranslations,
      'pt-BR': ptBrTranslations,
    },
    fallbackLng: 'en-US',
    defaultNS: 'translations',
    supportedLngs: ['en-US', 'es', 'pt-BR'],
  });

export default i18n;
