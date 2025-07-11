import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import UserInfo from '../../entities/user/UserInfo';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <UserInfo />
      <main className={styles.content}>
        <Outlet />
      </main> 
      <Footer />
    </div>
  );
};

export default Layout;
