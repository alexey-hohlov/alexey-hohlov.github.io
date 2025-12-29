import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { ErrorIcon } from '@/assets';
import { motionProps, scaleUp, slideFromBottom } from '@/animations/variants';

import styles from './Status.module.scss';

const Error: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div className={styles.status} {...motionProps}>
      <motion.div variants={scaleUp}>
        <ErrorIcon className={styles.error} />
      </motion.div>
      <motion.span variants={slideFromBottom}>
        {t('status.error')}
      </motion.span>
    </motion.div>
  );
};

export default Error;
