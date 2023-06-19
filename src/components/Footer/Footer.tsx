import { motion } from 'framer-motion';
import { SocialItem, UpButton } from '../';
import { GitHubIcon, TelegramIcon, VKIcon } from '../../assets';
import { socials } from '../../data/listItems';
import styles from './Footer.module.scss';
import { scale, slideFromBottom } from '../../utils/animations';

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

    return (
        <motion.footer className={styles.footer} {...motionProps}>
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
