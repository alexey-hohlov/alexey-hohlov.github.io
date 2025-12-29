import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './locales/ru/translations.json';
import en from './locales/en/translations.json';
import { getLanguage } from '@/utils/languageStorage';

i18next.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: getLanguage(),
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});
