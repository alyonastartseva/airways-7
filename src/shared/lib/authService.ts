import { jwtDecode } from 'jwt-decode';

export const TOKEN_KEY = 'token';

// Сохранить токен
export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Получить токен
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

// Удалить токен (логаут)
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

type JwtPayload = {
  preferred_username: string;
  realm_access?: {
    roles: string[];
  };
};

export const getUserFromToken = (): { username: string; roles: string[] } | null => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return {
      username: decoded.preferred_username,
      roles: decoded.realm_access?.roles || [],
    };
  } catch (e) {
    return null;
  }
};


