export type LanguageCode = 'ru' | 'en';

export type Language = {
  icon: string;
  title: string;
};

export interface Languages {
  data: {
    [key: string]: Language;
  };
  codes: LanguageCode[];
}
