import { motion } from 'framer-motion';
import { SkillsFooter } from '../../assets';
import { SkillsItem } from '../../components';
import { skillsItems } from '../../data/listItems';
import styles from './Skills.module.scss';
import { scale, slideFromLeft } from '../../utils/animations';

const Skills: React.FC = () => {
    const motionProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
            amount: 0.5,
            once: true,
        },
    };

    const MSkillsItem = motion(SkillsItem);

    return (
        <motion.section
            className={styles.skills}
            id={'skills'}
            {...motionProps}
        >
            <div className={styles.content}>
                <div className={styles.text}>
                    <motion.h1 variants={slideFromLeft} custom={1}>
                        Технологический стек и навыки
                    </motion.h1>
                    <motion.p variants={slideFromLeft} custom={2}>
                        Люблю писать на TypeScript. Умею адаптивно верстать с
                        использованием препроцессоров, уделяю внимание семантике
                    </motion.p>
                    <motion.p variants={slideFromLeft} custom={3}>
                        Владею React и Redux, а так же другими, представленными
                        здесь, технологиями
                    </motion.p>
                </div>

                <ul>
                    {skillsItems.map((item, index) => (
                        <MSkillsItem
                            variants={scale}
                            custom={index + 1}
                            title={item.title}
                            icon={item.icon}
                            key={item.title}
                        />
                    ))}
                </ul>
            </div>
            <SkillsFooter className={styles.footer} />
        </motion.section>
    );
};

export default Skills;
