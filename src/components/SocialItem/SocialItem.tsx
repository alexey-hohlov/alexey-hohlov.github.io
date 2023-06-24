import { ReactNode, forwardRef } from 'react';
import styles from './SocialItem.module.scss';

interface Props {
    href: string;
    icon: ReactNode;
    title: string;
}

const SocialItem: React.FC<Props> = ({ href, icon, title }) => {
    return (
        <li className={styles.wrapper}>
            <a
                className={styles.link}
                href={href}
                target={'_blank'}
                rel={'noreferrer'}
            >
                {icon}
            </a>
            <span>{title}</span>
        </li>
    );
};

export default SocialItem;
