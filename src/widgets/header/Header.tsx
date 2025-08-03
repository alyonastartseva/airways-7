import styles from './Header.module.scss';
import { useTheme } from '@/shared/hooks/ThemeProvider/useTheme';
import logo from '@assets/icons/logo.svg';
import { Button, Switch } from 'antd';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} to={'/'}>
          <img src={logo} alt="Air Alien" className={styles.logoIcon} />
          <span className={styles.logoText}>Air Alien</span>
        </Link>
        <div className={styles.authButtons}>
          <Link to="/login">
            <Button type="default">Вход</Button>
          </Link>
          <Button type="default">Регистрация</Button>
          <Switch
            checkedChildren={<FaSun style={{ marginTop: 4, height: 15, width: 15 }} />}
            unCheckedChildren={<FaMoon style={{ marginBottom: 2 }} />}
            defaultChecked
            checked={theme === 'light'}
            onChange={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
