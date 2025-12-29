import { useTranslation } from 'react-i18next';

import { SECTION_ID } from '@/constants';
import { useScrollTo } from '@/hooks/useScrollTo';

import SelectLanguage from './SelectLanguage/SelectLanguage';
import ToggleTheme from './ToggleTheme/ToggleTheme';
import logo from '@/assets/images/logo.png';
import styles from './Navbar.module.scss';

interface INavbarItem {
  title: string;
  sectionId: string;
}

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const scrollTo = useScrollTo();
  const items = t('navbar.items', { returnObjects: true }) as INavbarItem[];

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.items}>
          <a
            href={`#${SECTION_ID.GREETINGS}`}
            onClick={e => {
              e.preventDefault();
              scrollTo(SECTION_ID.GREETINGS);
            }}
          >
            <img src={logo} alt='logo' className={styles.logo} />
          </a>
          <ul className={styles.list}>
            {items.map(item => (
              <li key={item.sectionId}>
                <a
                  href={`#${item.sectionId}`}
                  className={styles.link}
                  onClick={e => {
                    e.preventDefault();
                    scrollTo(item.sectionId);
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.controls}>
            <ToggleTheme />
            <SelectLanguage />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
