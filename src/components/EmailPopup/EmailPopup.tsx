import { Modal, Button } from '../';
import styles from './EmailPopup.module.scss';

interface Props {
    isOpen: boolean;
}

const EmailPopup: React.FC<Props> = ({ isOpen }) => {
    const handleClose = () => {};

    return (
        <Modal onClose={handleClose} isOpen={isOpen}>
            <div className={styles.wrapper}>
                <Button onClick={handleClose} color={'blue'} title={'ЖОПА'} />
            </div>
        </Modal>
    );
};

export default EmailPopup;
