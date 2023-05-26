import { ReactNode } from 'react';
import styles from './Bullet.module.scss';

interface Props {
    icon: ReactNode;
    header: string;
    text: string;
}

const Bullet: React.FC<Props> = ({ icon, header, text }) => {
    return (
        <li className={styles.bullet}>
            {icon}
            <h3>{header}</h3>
            <p>{text}</p>
        </li>
    );
};

export default Bullet;
