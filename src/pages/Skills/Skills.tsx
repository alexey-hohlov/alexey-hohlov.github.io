import { SkillsFooter } from '../../assets';
import { SkillsItem } from '../../components';
import { skillsItems } from '../../data/listItems';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
    return (
        <section className={styles.skills} id={'skills'}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Технологический стек и навыки</h1>
                    <p>
                        Люблю писать на TypeScript. Умею адаптивно верстать с
                        использованием препроцессоров, уделяю внимание семантике
                    </p>
                    <p>
                        Владею React и Redux, а так же другими, представленными
                        здесь, технологиями
                    </p>
                </div>

                <ul>
                    {skillsItems.map(item => (
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
