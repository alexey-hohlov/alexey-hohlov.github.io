import styles from './ParticlesBackground.module.scss';

const ParticlesBackground: React.FC = () => {
  const particles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ul className={styles.particles}>
      {particles.map(particle => (
        <li key={particle}></li>
      ))}
    </ul>
  );
};

export default ParticlesBackground;
