import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main> 
      <Footer />
    </div>
  );
};

export default Layout;
