import { useController } from 'react-hook-form';

import styles from './Input.module.scss';

interface Props {
  name: string;
  placeholder: string;
  rows?: number;
}

const TextArea: React.FC<Props> = ({ placeholder, rows = 8, name }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <div className={styles.wrapper}>
      <textarea
        className={`${styles.input} ${error && styles.error}`}
        placeholder={placeholder}
        rows={rows}
        {...field}
      ></textarea>
      <span>{error?.message}</span>
    </div>
  );
};

export default TextArea;
