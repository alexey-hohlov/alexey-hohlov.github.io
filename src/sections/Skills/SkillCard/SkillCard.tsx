import styles from './SkillCard.module.scss';

interface Props {
  title: string;
  icon: string;
}

const SkillCard: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={icon} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
