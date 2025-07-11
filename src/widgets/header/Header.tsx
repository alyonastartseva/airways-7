import { Button } from 'antd';
import logo from '@/assets/icons/logo.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logo} alt ="Air Alien" className={styles.logoIcon}/>
        <div className={styles.authButtons}>
        <Link to="/login">
        <Button type="default">
            Вход
          </Button>
        </Link>
          <Button type="default">Регистрация</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
