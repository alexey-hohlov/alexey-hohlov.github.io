import { motion } from 'framer-motion';
import { SkillsFooter } from '../../assets';
import { Form } from '../../components';
import styles from './Contacts.module.scss';
import { scale, slideFromLeft, slideFromRight } from '../../utils/animations';

const Contacts: React.FC = () => {
    const motionProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
            amount: 0.5,
            once: true,
        },
    };

    const MForm = motion(Form);

    return (
        <motion.section
            className={styles.contacts}
            id={'contacts'}
            {...motionProps}
        >
            <motion.h1 custom={1} variants={slideFromLeft}>
                CONTACT
            </motion.h1>
            <motion.p custom={2} variants={slideFromRight}>
                У вас есть вопрос или хотите поработать вместе?
            </motion.p>
            <MForm variants={scale} />
        </motion.section>
    );
};

export default Contacts;
