import { Button } from '../../components';
import styles from './Greetings.module.scss';
import { scroller } from 'react-scroll';

const Greetings: React.FC = () => {
    const particles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleClick = () => {
        scroller.scrollTo('about', { smooth: true });
    };

    return (
        <section className={styles.greetings} id={'greetings'}>
            <div className={styles.block}>
                <div className={styles.text}>
                    Привет, меня зовут
                    <span> Алексей Хохлов</span>
                    .
                    <br />Я<span> front-end </span>
                    разработчик.
                </div>
                <Button title={'Далее'} onClick={handleClick} color={'white'} />
            </div>
            <ul className={styles.particles}>
                {particles.map(particle => (
                    <li key={particle}></li>
                ))}
            </ul>
        </section>
    );
};

export default Greetings;
