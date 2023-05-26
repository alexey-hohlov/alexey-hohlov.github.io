import { scroller } from 'react-scroll';

import { DoubleArrowIcon } from '../../assets';
import styles from './UpButton.module.scss';

const UpButton: React.FC = () => {
    const handleClick = () => {
        scroller.scrollTo('greetings', { smooth: true });
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            <DoubleArrowIcon />
        </button>
    );
};

export default UpButton;
