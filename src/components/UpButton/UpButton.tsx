import { scroller } from 'react-scroll';

import { DoubleArrowIcon } from '../../assets';
import styles from './UpButton.module.scss';
import { forwardRef } from 'react';

type Ref = HTMLButtonElement;

const UpButton = forwardRef<Ref>((props, ref) => {
    const handleClick = () => {
        scroller.scrollTo('greetings', { smooth: true });
    };

    return (
        <button className={styles.button} onClick={handleClick} ref={ref}>
            <DoubleArrowIcon />
        </button>
    );
});

export default UpButton;
