import styles from './Navbar.module.scss';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    const links = [
        { title: 'ABOUT', to: 'about' },
        { title: 'SKILLS', to: 'skills' },
        { title: 'CONTACTS', to: 'contacts' },
    ];

    return (
        <nav className={styles.navbar}>
            <ul>
                {links.map(link => (
                    <li key={link.title}>
                        <Link
                            className={styles.link}
                            to={link.to}
                            activeClass={styles.active}
                            smooth={true}
                            spy={true}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
