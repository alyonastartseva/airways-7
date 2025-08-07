import styles from './Header.module.scss';
import { useTheme } from '@/shared/hooks/ThemeProvider/useTheme';
import { useAuthToken } from '@/shared/hooks/useAuthToken';
import logo from '@assets/icons/logo.svg';
import { Button, Switch } from 'antd';
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, removeToken } = useAuthToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} to={'/'}>
          <img src={logo} alt="Air Alien" className={styles.logoIcon} />
          <span className={styles.logoText}>Air Alien</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/admin/passengers">Пассажиры</Link>
          <Link to="/admin/flights">Самолеты</Link>
          <Link to="/admin/tickets">Места</Link>
          <Link to="/">Пояса</Link>
          <Link to="/">Рейсы</Link>
          <Link to="/">Билеты</Link>
          <Link to="/">Бронирование</Link>
          <Link to="/">Посадочные места</Link>
          <Link to="/admin/passengers-table">Пользователи</Link>
        </nav>
        <div className={styles.authButtons}>
          {isAuthenticated ? (
            <>
              <span>{user?.username}</span>
              <Button type="default" onClick={handleLogout}>
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button type="default">Вход</Button>
              </Link>
              <Button type="default" onClick={() => navigate('/register')}>
                Регистрация
              </Button>
            </>
          )}
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
