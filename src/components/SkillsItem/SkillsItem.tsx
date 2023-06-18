import { ReactNode, forwardRef } from 'react';
import styles from './SkillsItem.module.scss';

interface Props {
    icon: ReactNode;
    title: string;
}

type Ref = HTMLLIElement;

const SkillsItem = forwardRef<Ref, Props>(({ icon, title }, ref) => {
    return (
        <li className={styles.item} ref={ref}>
            {icon}
            <span>{title}</span>
        </li>
    );
});

export default SkillsItem;
