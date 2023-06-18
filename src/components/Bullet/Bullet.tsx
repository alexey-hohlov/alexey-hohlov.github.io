import { ReactNode, forwardRef } from 'react';
import styles from './Bullet.module.scss';

interface Props {
    icon: ReactNode;
    header: string;
    text: string;
}
type Ref = HTMLLIElement;

const Bullet = forwardRef<Ref, Props>(({ icon, header, text }, ref) => {
    return (
        <li className={styles.bullet} ref={ref}>
            {icon}
            <h3>{header}</h3>
            <p>{text}</p>
        </li>
    );
});
export default Bullet;
