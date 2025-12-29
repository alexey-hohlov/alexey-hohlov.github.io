import { CodeIcon, GithubIcon } from '@/assets';

import styles from './ProjectCard.module.scss';

interface Props {
  title: string;
  imageUrl: string;
  technologies: string;
  deployUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<Props> = ({
  imageUrl,
  title,
  deployUrl,
  githubUrl,
  technologies,
}) => {
  return (
    <li className={styles.card}>
      <a href={deployUrl} target='_blank' rel='noopener noreferrer'>
        <img src={imageUrl} alt={title} className={styles.image} />
        <span className={styles.title}>{title}</span>
      </a>

      <div className={styles.hoverContent}>
        <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
          <GithubIcon />
          <span>GitHub</span>
        </a>
        <div className={styles.technologies}>
          <CodeIcon />
          <span>{technologies}</span>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
