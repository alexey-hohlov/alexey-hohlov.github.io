import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export const useValidationSchemas = () => {
  const { t } = useTranslation();

  const schemas = useMemo(() => {
    const requiredString = yup
      .string()
      .required(t('validation.required'))
      .trim();

    return {
      contactSchema: yup.object({
        name: requiredString.min(2, t('validation.minLength', { count: 2 })),
        email: requiredString.matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          t('validation.email')
        ),
        message: requiredString.min(
          20,
          t('validation.minLength', { count: 20 })
        ),
      }),
    };
  }, [t]);

  return schemas;
};
