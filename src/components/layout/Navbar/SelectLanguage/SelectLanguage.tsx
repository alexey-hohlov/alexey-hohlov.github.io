import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useLanguage } from '@/hooks/useLanguage';
import { SUPPORTED_LANGUAGES } from '@/data/languagesData';
import type { LanguageCode } from '@/types/languageTypes';

import styles from './SelectLanguage.module.scss';

const SelectLanguage: React.FC = () => {
  const { selectLanguage, currentLanguage } = useLanguage();
  const { data, codes } = SUPPORTED_LANGUAGES;

  const handleSelect = (code: LanguageCode) => {
    selectLanguage(code);
  };
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className={styles.trigger}>
          <img
            src={data[currentLanguage].icon}
            alt={data[currentLanguage].title}
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.content}
          sideOffset={30}
          align='end'
        >
          {codes.map(code => (
            <DropdownMenu.Item
              disabled={code === currentLanguage}
              key={code}
              className={styles.item}
              onSelect={() => {
                handleSelect(code);
              }}
            >
              <img src={data[code].icon} alt={data[code].title} />
              <span>{data[code].title}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SelectLanguage;
