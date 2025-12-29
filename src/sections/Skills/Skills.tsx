import { Trans, useTranslation } from 'react-i18next';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BREAKPOINTS, SECTION_ID } from '@/constants';

import SkillsGrid from './SkillsGrid/SkillsGrid';
import SkillsCarousel from './SkillsCarousel/SkillsCarousel';
import SkillsDetails from './SkillsDetails/SkillsDetails';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(BREAKPOINTS.TABLET);
  return (
    <section className={styles.skills} id={SECTION_ID.SKILLS}>
      <h3>{t('skills.title')}</h3>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            <Trans
              i18nKey={'skills.text'}
              components={{
                accent: <span className={'text-accent'} />,
                blue: <span className={styles.blue} />,
                green: <span className={styles.green} />,
              }}
            />
          </p>
          <p>
            <Trans
              i18nKey={'skills.subtext'}
              components={{
                accent: <span className={'text-accent'} />,
              }}
            />
          </p>
        </div>
        {isMobile ? <SkillsCarousel /> : <SkillsGrid />}
      </div>
      <SkillsDetails />
    </section>
  );
};

export default Skills;
