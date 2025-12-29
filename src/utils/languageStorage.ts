import { LOCAL_STORAGE_KEYS } from '@/constants';
import type { LanguageCode } from '@/types/languageTypes';

export const getLanguage = (): LanguageCode => {
  const savedValue = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE);
  try {
    return savedValue as LanguageCode;
  } catch (error) {
    return 'ru';
  }
};

export const saveLanguage = (lang: LanguageCode) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, lang);
  } catch (error) {
    console.warn(error);
  }
};
