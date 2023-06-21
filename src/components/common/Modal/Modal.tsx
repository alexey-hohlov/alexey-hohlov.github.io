import { ReactNode, useEffect } from 'react';
import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, children, onClose }) => {
    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [isOpen]);

    return (
        <div
            className={`${styles.modal} ${isOpen && styles.open}`}
            onClick={onClose}
        >
            <div className={`${styles.content} ${isOpen && styles.open}`}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
