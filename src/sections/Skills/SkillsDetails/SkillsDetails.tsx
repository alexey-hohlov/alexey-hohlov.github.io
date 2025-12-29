import * as Accordion from '@radix-ui/react-accordion';
import { useTranslation } from 'react-i18next';

import { ChevronIcon } from '@/assets';

import styles from './SkillsDetails.module.scss';

const SkillsDetails: React.FC = () => {
  const { t } = useTranslation();

  const items = t('skills.details.items', { returnObjects: true }) as {
    header: string;
    content: string;
  }[];

  return (
    <div className={styles.wrapper}>
      <h4>{t('skills.details.title')}</h4>
      <Accordion.Root type={'multiple'} className={styles.accordion}>
        {items.map(item => (
          <Accordion.Item
            value={item.header}
            key={item.header}
            className={styles.item}
          >
            <Accordion.Header>
              <Accordion.Trigger className={styles.trigger}>
                <span>{item.header}</span>
                <ChevronIcon className={styles.chevron} />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.content}>
              <span>{item.content}</span>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default SkillsDetails;
