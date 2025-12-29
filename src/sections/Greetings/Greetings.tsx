import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { Button } from '@/components';
import { ArrowIcon } from '@/assets';
import { BREAKPOINTS, SECTION_ID } from '@/constants';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useScrollTo } from '@/hooks/useScrollTo';
import {
  appear,
  motionProps,
  scaleUp,
  slideFromLeft,
  slideFromRight,
} from '@/animations/variants';

import ParticlesBackground from './ParticlesBackground/ParticlesBackground';
import styles from './Greetings.module.scss';

const Greetings: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);
  const scrollTo = useScrollTo();

  const handleClick = () => {
    scrollTo(SECTION_ID.ABOUT);
  };

  return (
    <motion.section
      className={styles.greetings}
      id={SECTION_ID.GREETINGS}
      {...motionProps}
    >
      <div className={styles.content}>
        <motion.h1 variants={appear} custom={1}>
          {t('greetings.title')}
        </motion.h1>
        <motion.span variants={slideFromLeft} custom={3}>
          <Trans
            i18nKey={'greetings.subtitle'}
            components={{ accent: <span className={styles.accentColor} /> }}
          />
        </motion.span>
        <motion.span variants={slideFromRight} custom={5}>
          <Trans
            i18nKey={'greetings.name'}
            components={{ accent: <span className={styles.accentColor} /> }}
          />
        </motion.span>
        <motion.span
          className={styles.description}
          variants={appear}
          custom={7}
        >
          {t('greetings.description')}
        </motion.span>
        <motion.div variants={scaleUp} custom={9}>
          <Button
            title={t('greetings.button')}
            className={styles.button}
            onClick={handleClick}
          >
            <ArrowIcon />
          </Button>
        </motion.div>
      </div>
      {!isMobile && <ParticlesBackground />}
    </motion.section>
  );
};

export default Greetings;
