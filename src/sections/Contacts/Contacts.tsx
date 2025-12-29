import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { SECTION_ID } from '@/constants';
import { inViewProps, scaleUp } from '@/animations/variants';

import Form from './Form/Form';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      className={styles.contacts}
      id={SECTION_ID.CONTACTS}
      {...inViewProps}
    >
      <h3>{t('contacts.title')}</h3>
      <span>
        <Trans
          i18nKey={'contacts.text'}
          components={{ accent: <span className={'text-accent'} /> }}
        />
      </span>
      <div className={styles.wrapper}>
        <motion.div className={styles.formContainer} variants={scaleUp}>
          <Form />
        </motion.div>
      </div>
      <span>
        <Trans
          i18nKey={'contacts.subtext'}
          components={{ accent: <span className={'text-accent'} /> }}
        />
      </span>
    </motion.section>
  );
};

export default Contacts;
