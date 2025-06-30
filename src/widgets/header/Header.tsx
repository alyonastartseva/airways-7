import { Button } from 'antd';
import logo from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logo} alt ="Logo" className={styles.logoIcon}/>
        <div className={styles.authButtons}>
          <Button type="default">
            Вход
          </Button>
          <Button type="default">Регистрация</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
