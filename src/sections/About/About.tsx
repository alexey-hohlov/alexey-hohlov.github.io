import { Trans, useTranslation } from 'react-i18next';

import { SECTION_ID } from '@/constants';

import photo from '@/assets/images/photo.jpg';
import styles from './About.module.scss';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.about} id={SECTION_ID.ABOUT}>
      <h3>{t('about.title')}</h3>
      <div className={styles.content}>
        <img src={photo} alt='photo' />
        <div className={styles.text}>
          <p>
            <Trans
              i18nKey={'about.text'}
              components={{ accent: <span className={'text-accent'} /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey={'about.subtext'}
              components={{ accent: <span className={'text-accent'} /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
