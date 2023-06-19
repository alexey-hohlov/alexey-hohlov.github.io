import { forwardRef } from 'react';
import styles from './Button.module.scss';

interface Props {
    title: string;
    onClick: () => void;
    color: string;
    isDisabled?: boolean;
}

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(
    ({ title, onClick, color, isDisabled }, ref) => {
        const handleColor = () => {
            switch (color) {
                case 'white':
                    return styles.white;
                case 'blue':
                    return styles.blue;
                case 'crimson':
                    return styles.crimson;
                case 'teal':
                    return styles.teal;
                default:
                    break;
            }
        };

        return (
            <button
                className={`${styles.button} ${handleColor()}`}
                onClick={onClick}
                disabled={isDisabled}
                ref={ref}
            >
                {title}
            </button>
        );
    }
);

export default Button;
