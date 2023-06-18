import styles from './About.module.scss';
import photo from '../../assets/images/photo.png';
import { Bullet } from '../../components';
import { motion } from 'framer-motion';
import { aboutBullets } from '../../data/listItems';
import {
    scale,
    slideFromBottom,
    slideFromLeft,
} from '../../utils/animations';

const About: React.FC = () => {
    const motionProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
            amount: 0.5,
            once: true,
        },
    };

    //Transorm Bullet to Motion Component
    const MBullet = motion(Bullet);

    return (
        <motion.section className={styles.about} id={'about'} {...motionProps}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <motion.img src={photo} alt='' variants={slideFromLeft} />
                    <div className={styles.text}>
                        <motion.p custom={1} variants={scale}>
                            Я занимаюсь front-end разработкой. Создаю плавные,
                            интуитивные, адаптивные веб-приложения и интерфейсы
                        </motion.p>
                        <motion.p custom={2} variants={scale}>
                            Связаться со мной, а так же ознакомиться с моими
                            навыками можно ниже.
                        </motion.p>
                    </div>
                </div>
                <motion.ul className={styles.bullets} {...motionProps}>
                    {aboutBullets.map((bullet, index) => (
                        <MBullet
                            variants={slideFromBottom}
                            custom={index + 1}
                            key={bullet.header}
                            icon={bullet.svg}
                            header={bullet.header}
                            text={bullet.text}
                        />
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
};

export default About;
