import type { ReactNode } from 'react';

import styles from './Button.module.scss';

interface Props {
  onClick?: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<Props> = ({
  onClick,
  title,
  className,
  children,
  iconPosition = 'right',
}) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {iconPosition === 'left' && children}
      {title}
      {iconPosition === 'right' && children}
    </button>
  );
};

export default Button;
