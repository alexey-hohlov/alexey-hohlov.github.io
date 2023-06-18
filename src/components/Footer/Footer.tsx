import { SocialItem, UpButton } from '../';
import { GitHubIcon, TelegramIcon, VKIcon } from '../../assets';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const socials = [
        {
            title: 'Github',
            icon: <GitHubIcon />,
            href: 'https://github.com/alexey-hohlov',
        },
        {
            title: 'Telegram',
            icon: <TelegramIcon />,
            href: 'https://t.me/alexeyOD',
        },
        { title: 'Vk', icon: <VKIcon />, href: 'https://vk.com/ypoenie' },
    ];

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
