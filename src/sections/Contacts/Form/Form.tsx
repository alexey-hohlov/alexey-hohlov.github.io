import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

import { Button, Input, TextArea } from '@/components';
import { useValidationSchemas } from '@/hooks/useValidationSchemas';
import { FORM_STATUS } from '@/constants';

import Loader from './Status/Loader';
import Success from './Status/Success';
import Error from './Status/Error';
import styles from './Form.module.scss';

interface FormData {
  email: string;
  name: string;
  message: string;
}

const Form: React.FC = () => {
  const [formStatus, setFormStatus] = useState<string>(FORM_STATUS.IDDLE);

  const { t } = useTranslation();

  const { contactSchema } = useValidationSchemas();
  const methods = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FormData> = async data => {
    setFormStatus(FORM_STATUS.LOADING);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormStatus(FORM_STATUS.SUCCESS);
      reset();
    } catch (error) {
      console.log(error);
      setFormStatus(FORM_STATUS.ERROR);
    } finally {
      const timer = setTimeout(() => {
        setFormStatus(FORM_STATUS.IDDLE);
      }, 3000);

      return () => clearTimeout(timer);
    }
  };

  if (formStatus === FORM_STATUS.LOADING) return <Loader />;

  if (formStatus === FORM_STATUS.SUCCESS) return <Success />;

  if (formStatus === FORM_STATUS.ERROR) return <Error />;

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fields}>
          <Input
            placeholder={t('contacts.placeholders.email')}
            name={'email'}
          />
          <Input placeholder={t('contacts.placeholders.name')} name={'name'} />
          <TextArea
            placeholder={t('contacts.placeholders.message')}
            name={'message'}
          />
        </div>
        <Button className={styles.button} title={t('contacts.button')} />
      </form>
    </FormProvider>
  );
};

export default Form;
