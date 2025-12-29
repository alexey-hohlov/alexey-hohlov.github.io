import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { CheckIcon } from '@/assets';

import styles from './Status.module.scss';
import { motionProps, scaleUp, slideFromBottom } from '@/animations/variants';

const Success: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div className={styles.status} {...motionProps}>
      <motion.div variants={scaleUp}>
        <CheckIcon />
      </motion.div>
      <motion.span variants={slideFromBottom}>
        {t('status.success')}
      </motion.span>
    </motion.div>
  );
};

export default Success;
