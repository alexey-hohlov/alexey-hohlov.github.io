import { useController } from 'react-hook-form';
import styles from './Input.module.scss';
import { IValidations } from '../../../types/formTypes';

interface Props {
    placeholder: string;
    name: string;
    validations: IValidations;
}

const Input: React.FC<Props> = ({ placeholder, name, validations }) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations });

    return (
        <div className={styles.wrapper}>
            <input
                className={`${styles.input} ${error && styles.error}`}
                type='text'
                {...field}
                placeholder={placeholder}
            />
            {error && <span>{error.message}</span>}
        </div>
    );
};

export default Input;
