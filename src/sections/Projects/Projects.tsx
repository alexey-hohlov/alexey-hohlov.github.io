import { Trans, useTranslation } from 'react-i18next';

import { SECTION_ID } from '@/constants';
import { projectsData } from '@/data/projectsData';

import ProjectCard from './ProjectCard/ProjectCard';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.projects} id={SECTION_ID.PROJECTS}>
      <h3>{t('projects.title')}</h3>
      <p>
        <Trans
          i18nKey={'projects.text'}
          components={{ accent: <span className={'text-accent'} /> }}
        />
      </p>
      <ul className={styles.grid}>
        {projectsData.map(card => (
          <ProjectCard key={card.title} {...card} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
