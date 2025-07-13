import Footer from '../../widgets/footer/Footer';
import Header from '../../widgets/header/Header';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
