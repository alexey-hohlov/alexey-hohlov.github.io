import { motion } from 'framer-motion';
import { Button } from '../../components';
import styles from './Greetings.module.scss';
import { scroller } from 'react-scroll';
import { appear, scale } from '../../utils/animations';

const Greetings: React.FC = () => {
    const particles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleClick = () => {
        scroller.scrollTo('about', { smooth: true });
    };

    const MButton = motion(Button);

    return (
        <motion.section
            className={styles.greetings}
            id={'greetings'}
            initial={'hidden'}
            animate={'visible'}
        >
            <div className={styles.block}>
                <motion.div
                    className={styles.text}
                    variants={appear}
                    custom={1}
                >
                    Привет, меня зовут
                    <span> Алексей Хохлов</span>
                    .
                    <br />Я<span> front-end </span>
                    разработчик.
                </motion.div>
                <MButton title={'Далее'} onClick={handleClick} color={'white'} variants={scale} custom={2}/>
            </div>
            <ul className={styles.particles}>
                {particles.map(particle => (
                    <li key={particle}></li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Greetings;
