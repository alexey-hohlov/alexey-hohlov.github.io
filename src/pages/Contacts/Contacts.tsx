import { SkillsFooter } from '../../assets';
import { Form } from '../../components';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
    return (
        <section className={styles.contacts} id={'contacts'}>
            <h1>CONTACT</h1>
            <p>У вас есть вопрос или хотите поработать вместе?</p>
            <Form />
        </section>
    );
};

export default Contacts;
