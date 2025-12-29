import { useTranslation } from 'react-i18next';

import type { LanguageCode } from '@/types/languageTypes';
import { saveLanguage } from '@/utils/languageStorage';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const selectLanguage = (lang: LanguageCode) => {
    i18n.changeLanguage(lang);
    saveLanguage(lang);
  };

  const currentLanguage = i18n.language;

  return {
    selectLanguage,
    currentLanguage,
  };
};
