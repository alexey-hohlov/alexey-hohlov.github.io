import { skillsData } from '@/data/skillsData';

import SkillCard from '../SkillCard/SkillCard';
import styles from './SkillsGrid.module.scss';

const SkillsGrid: React.FC = () => {
  return (
    <ul className={styles.grid}>
      {skillsData.map(card => (
        <li key={card.title}>
          <SkillCard {...card} />
        </li>
      ))}
    </ul>
  );
};

export default SkillsGrid;
