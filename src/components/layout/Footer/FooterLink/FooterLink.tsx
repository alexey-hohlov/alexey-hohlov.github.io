import styles from './FooterLink.module.scss';

interface Props {
  href: string;
  title: string;
  Icon: React.ComponentType;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const FooterLink: React.FC<Props> = ({
  href,
  title,
  Icon,
  external = true,
  onClick,
}) => {
  return (
    <a
      className={styles.link}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
    >
      <Icon />
      <span>{title}</span>
    </a>
  );
};

export default FooterLink;
