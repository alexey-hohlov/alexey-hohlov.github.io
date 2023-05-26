import { UpButton } from '../';
import { GitHubIcon, SassIcon, TelegramIcon, VKIcon } from '../../assets';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <UpButton />
            <div className={styles.social}>
                <GitHubIcon />
                <TelegramIcon />
                <VKIcon />
            </div>
            <div className={styles.note}>
                ALEXEY HOHLOV <span>©2023</span>
            </div>
        </footer>
    );
};

export default Footer;
