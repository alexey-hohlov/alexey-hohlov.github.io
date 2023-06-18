import { SocialItem, UpButton } from '../';
import { GitHubIcon, TelegramIcon, VKIcon } from '../../assets';
import { socials } from '../../data/listItems';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <UpButton />
            <ul className={styles.socials}>
                {socials.map(item => (
                    <SocialItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                    />
                ))}
            </ul>
            <div className={styles.note}>
                ALEXEY HOHLOV <span>©2023</span>
            </div>
        </footer>
    );
};

export default Footer;
