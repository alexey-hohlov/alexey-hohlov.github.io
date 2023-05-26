import { ReactNode } from 'react';
import styles from './SkillsItem.module.scss';

interface Props {
    icon: ReactNode;
    title: string;
}

const SkillsItem: React.FC<Props> = ({icon, title}) => {

    return (
        <li className={styles.item}>
            {icon}
            <span>{title}</span>
        </li>
    )
}

export default SkillsItem;