import { motion } from 'framer-motion';
import { Modal } from '../';
import { DoneIcon, ErrorIcon, LoadingSpinner } from '../../assets';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { emailSlice } from '../../store/reducers/emailReducer';
import styles from './EmailPopup.module.scss';
import {
    appear,
    loadingSpinner,
    scale,
    slideFromBottom,
} from '../../utils/animations';

const EmailPopup: React.FC = () => {
    const { popup, status } = useAppSelector(state => state.emailReducer);
    const { setPopup } = emailSlice.actions;
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setPopup(false));
    };

    const motionProps = {
        initial: 'hidden',
        animate: 'visible',
    };

    const MDoneIcon = motion(DoneIcon);
    const MErrorIcon = motion(ErrorIcon);
    const MLoadingSpinner = motion(LoadingSpinner);

    const handleStatus = () => {
        switch (status) {
            case 'loading':
                return (
                    <>
                        {/* <LoadingSpinner className={styles.spinner} /> */}
                        <MLoadingSpinner
                            variants={loadingSpinner}
                            initial={'hidden'}
                            animate={['visible', 'spin']}
                            key={'loadingSvg'}
                        />
                        <motion.span key={'loading'} variants={slideFromBottom}>
                            Загрузка...
                        </motion.span>
                    </>
                );
            case 'success':
                return (
                    <>
                        <MDoneIcon key={'doneSvg'} variants={scale} />
                        <motion.span
                            key={'done'}
                            className={styles.test}
                            variants={slideFromBottom}
                        >
                            Готово!
                        </motion.span>
                    </>
                );
            case 'error':
                return (
                    <>
                        <MErrorIcon variants={scale} key={'errorSvg'} />
                        <motion.span variants={slideFromBottom} key={'error'}>
                            Ой, что-то пошло не так...
                        </motion.span>
                    </>
                );
            case '':
                return null;
            default:
                break;
        }
    };

    return (
        <Modal onClose={handleClose} isOpen={popup}>
            <motion.div className={styles.wrapper} {...motionProps}>
                {handleStatus()}
            </motion.div>
        </Modal>
    );
};

export default EmailPopup;
