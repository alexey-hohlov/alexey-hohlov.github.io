import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { LoadingIcon } from '@/assets';
import { appear, motionProps, scaleUp } from '@/animations/variants';

import styles from './Status.module.scss';

const Loader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div className={styles.status} {...motionProps}>
      <motion.div variants={scaleUp}>
        <LoadingIcon className={styles.loader} />
      </motion.div>
      <motion.span variants={appear}>
        {t('status.loading')}
      </motion.span>
    </motion.div>
  );
};

export default Loader;
