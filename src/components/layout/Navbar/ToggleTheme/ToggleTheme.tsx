import { useTheme } from '@/hooks/useTheme';
import { DarkModeIcon, LightModeIcon } from '@/assets';

import styles from './ToggleTheme.module.scss';

const ToggleTheme: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.button}>
      {theme === 'dark' && <LightModeIcon />}
      {theme === 'light' && <DarkModeIcon />}
    </button>
  );
};

export default ToggleTheme;
