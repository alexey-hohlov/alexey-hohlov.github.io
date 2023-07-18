import { motion } from 'framer-motion';
import { EmailPopup, Form } from '../../components';
import styles from './Contacts.module.scss';
import { scale, slideFromLeft, slideFromRight } from '../../utils/animations';
const Contacts: React.FC = () => {
    const motionProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
            amount: 0.4,
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
            <EmailPopup />
        </motion.section>
    );
};

export default Contacts;
