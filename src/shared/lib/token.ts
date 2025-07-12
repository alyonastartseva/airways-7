import type {  JwtPayload, DecodedUser } from '@/features/auth/types';
import { jwtDecode } from 'jwt-decode';


export const TOKEN_KEY = 'token';
export const REFRESH_TOKEN_KEY = 'refresh_token';

export const saveToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const saveRefreshToken = (token: string) => localStorage.setItem(REFRESH_TOKEN_KEY, token);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const removeRefreshToken = () => localStorage.removeItem(REFRESH_TOKEN_KEY);



export const getUserFromToken = (): DecodedUser | null => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return {
      username: decoded.preferred_username,
      roles: decoded.realm_access?.roles || [],
    };
  } catch {
    return null;
  }
};


