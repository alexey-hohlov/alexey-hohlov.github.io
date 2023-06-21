import { motion } from 'framer-motion';
import { SocialItem, UpButton } from '../';
import { socials } from '../../data/listItems';
import styles from './Footer.module.scss';
import { scale, slideFromBottom } from '../../utils/animations';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { emailSlice } from '../../store/reducers/emailReducer';

const Footer: React.FC = () => {
    const motionProps = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
            amount: 0.5,
            once: true,
        },
    };

    const MUpButton = motion(UpButton);

    const { setPopup, setEmailStatus } = emailSlice.actions;
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setPopup(false));
    };

    const test = () => {
        dispatch(setPopup(true));
        dispatch(setEmailStatus('loading'));
        setTimeout(() => {
            dispatch(setEmailStatus(''));
            dispatch(setEmailStatus('success'));
        }, 2000);
    };

    return (
        <motion.footer className={styles.footer} {...motionProps}>
            <button onClick={test}>TEST</button>
            <MUpButton variants={scale} custom={1} />
            <motion.ul
                className={styles.socials}
                variants={slideFromBottom}
                custom={2}
            >
                {socials.map(item => (
                    <SocialItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                    />
                ))}
            </motion.ul>
            <div className={styles.note}>
                ALEXEY HOHLOV <span>©2023</span>
            </div>
        </motion.footer>
    );
};

export default Footer;
