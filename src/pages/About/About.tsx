import styles from './About.module.scss';
import photo from '../../assets/images/photo.png';
import { Bullet } from '../../components';
import { motion } from 'framer-motion';
import {
    bulletsAnimation,
    imgAnimation,
    textAnimation,
} from '../../utils/animations';
import { aboutBullets } from '../../data/listItems';

const About: React.FC = () => {
    const MBullet = motion(Bullet);

    return (
        <motion.section
            className={styles.about}
            id={'about'}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ amount: 0.5 }}
        >
            <div className={styles.content}>
                <div className={styles.info}>
                    <motion.img src={photo} alt='' variants={imgAnimation} />
                    <div className={styles.text}>
                        <motion.p custom={1} variants={textAnimation}>
                            Я занимаюсь front-end разработкой. Создаю плавные,
                            интуитивные, адаптивные веб-приложения и интерфейсы
                        </motion.p>
                        <motion.p custom={2} variants={textAnimation}>
                            Связаться со мной, а так же ознакомиться с моими
                            навыками можно ниже.
                        </motion.p>
                    </div>
                </div>
                <motion.ul
                    className={styles.bullets}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.5 }}
                >
                    {aboutBullets.map((bullet, index) => (
                        <MBullet
                            variants={bulletsAnimation}
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
