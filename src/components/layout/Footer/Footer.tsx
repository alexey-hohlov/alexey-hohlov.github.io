import { Trans, useTranslation } from 'react-i18next';

import { Button } from '@/components';
import { ArrowIcon } from '@/assets';
import { useScrollTo } from '@/hooks/useScrollTo';
import { SECTION_ID } from '@/constants';
import { GITHUB_LINK, MAIL_LINK, SOCIAL_LINKS } from '@/data/footerData';

import FooterLink from './FooterLink/FooterLink';
import logo from '@/assets/images/logo.png';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const scrollTo = useScrollTo();

  const handleScrollToTop = () => {
    scrollTo(SECTION_ID.GREETINGS);
  };

  const handleScrollToContacts = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(SECTION_ID.CONTACTS);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>{t('footer.name')}</h3>
          <p>{t('footer.description')}</p>
          <Button
            title={t('footer.toTop')}
            className={styles.button}
            onClick={handleScrollToTop}
          >
            <ArrowIcon />
          </Button>
        </div>
        <div className={styles.socials}>
          <ul className={styles.list}>
            <h4>{t('footer.contactMe')}</h4>
            {SOCIAL_LINKS.map(item => (
              <FooterLink {...item} key={item.title} />
            ))}
            <FooterLink {...MAIL_LINK} onClick={handleScrollToContacts} />
          </ul>
          <div className={styles.list}>
            <h4>{t('footer.github')}</h4>
            <FooterLink {...GITHUB_LINK} />
          </div>
        </div>
        <div className={styles.copyright}>
          <Trans
            i18nKey={'footer.madeBy'}
            components={{ accent: <span className='text-accent' /> }}
          />
        </div>
      </div>
      <img className={styles.logo} src={logo} alt='logo' />
    </footer>
  );
};

export default Footer;
