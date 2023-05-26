import { useRef } from 'react';
import { Greetings, About, Skills, Contacts } from '../../pages';
import { Navbar, Footer } from '../';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Greetings />
            <Navbar />
            <About />
            <Skills />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
