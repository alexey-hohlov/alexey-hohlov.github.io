import { useController } from 'react-hook-form';

import styles from './Input.module.scss';

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  defaultValue?: string;
}

const Input: React.FC<Props> = ({
  type = 'text',
  placeholder,
  name,
  defaultValue = '',
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, defaultValue });

  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        className={`${styles.input} ${error && styles.error}`}
        placeholder={placeholder}
        {...field}
      />
      <span>{error?.message}</span>
    </div>
  );
};

export default Input;
