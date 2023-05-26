import {
    CssIcon,
    FigmaIcon,
    GitIcon,
    HtmlIcon,
    JavaScriptIcon,
    ReactIcon,
    ReduxIcon,
    SassIcon,
    SkillsFooter,
    TypeScriptIcon,
} from '../../assets';
import { SkillsItem } from '../../components';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
    const skills = [
        { title: 'TypeScript', icon: <TypeScriptIcon /> },
        { title: 'JavaScript', icon: <JavaScriptIcon /> },
        { title: 'React', icon: <ReactIcon /> },
        { title: 'Redux', icon: <ReduxIcon /> },
        { title: 'CSS', icon: <CssIcon /> },
        { title: 'Sass / Scss', icon: <SassIcon /> },
        { title: 'HTML', icon: <HtmlIcon /> },
        { title: 'Git', icon: <GitIcon /> },
        { title: 'Figma', icon: <FigmaIcon /> },
    ];

    return (
        <section className={styles.skills} id={'skills'}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Технологический стек и навыки</h1>
                    <p>
                        Люблю писать на TypeScript. Умею адаптивно верстать с
                        использованием препроцессоров
                    </p>
                    <p>
                        Владею React и Redux, а так же другими, представленными
                        здесь, технологиями
                    </p>
                </div>

                <ul>
                    {skills.map(item => (
                        <SkillsItem
                            title={item.title}
                            icon={item.icon}
                            key={item.title}
                        />
                    ))}
                </ul>
            </div>
            <SkillsFooter className={styles.footer} />
        </section>
    );
};

export default Skills;
