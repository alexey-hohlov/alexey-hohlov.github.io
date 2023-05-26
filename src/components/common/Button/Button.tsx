import styles from './Button.module.scss';

interface Props {
    title: string;
    onClick: () => void;
    color: string;
    isDisabled?: boolean;
}

const Button: React.FC<Props> = ({ title, onClick, color, isDisabled }) => {
    const handleColor = () => {
        switch (color) {
            case 'white':
                return styles.white;
            case 'blue':
                return styles.blue;
            case 'crimson':
                return styles.crimson;
            default:
                break;
        }
    };

    return (
        <button
            className={`${styles.button} ${handleColor()}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {title}
        </button>
    );
};

export default Button;
