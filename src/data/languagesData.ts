import type { Languages } from '@/types/languageTypes';

import ru from '@/assets/icons/ru.png';
import en from '@/assets/icons/us.png';

export const SUPPORTED_LANGUAGES: Languages = {
  data: {
    ru: { icon: ru, title: 'Русский' },
    en: { icon: en, title: 'English' },
  },
  codes: ['ru', 'en'],
};
