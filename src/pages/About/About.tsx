import styles from './About.module.scss';
import photo from '../../assets/images/photo.png';
import { CodeIcon, LampIcon, LayoutIcon, RocketIcon } from '../../assets';
import { Bullet } from '../../components';

const About: React.FC = () => {
    const bullets = [
        {
            svg: <CodeIcon />,
            header: 'Разработка',
            text: 'При разработке я стараюсь придерживаться самых актуальных технологий и best practices',
        },
        {
            svg: <LayoutIcon />,
            header: 'Адаптивность',
            text: 'Моя верстка будет работать на любом устройстве',
        },
        {
            svg: <LampIcon />,
            header: 'Интуитивность',
            text: 'Отдаю предпочтение интуитивно понятному UI/UX',
        },
        {
            svg: <RocketIcon />,
            header: 'Динамика',
            text: 'Все свои приложения и сайты я стараюсь оживить и сделать менее статичными',
        },
    ];

    return (
        <section className={styles.about} id={'about'}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <img src={photo} alt='' />
                    <div className={styles.text}>
                        <p>
                            Занимаюсь front-end разработкой. Создаю плавные,
                            интуитивные, адаптивные веб-приложения и интерфейсы
                        </p>
                        <p>
                            Связаться со мной, а так же ознакомиться с моими
                            навыками можно ниже.
                        </p>
                    </div>
                </div>
                <ul className={styles.bullets}>
                    {bullets.map(bullet => (
                        <Bullet
                            key={bullet.header}
                            icon={bullet.svg}
                            header={bullet.header}
                            text={bullet.text}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
