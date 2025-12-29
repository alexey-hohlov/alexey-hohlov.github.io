import { About, Contacts, Greetings, Projects, Skills } from '@/sections';
import { Footer, Navbar } from '@/components';

import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <main className={styles.layout}>
      <Greetings />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
