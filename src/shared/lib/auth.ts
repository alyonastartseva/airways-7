const AUTH_KEY = 'air.auth.user';

export type AuthUser = { login: string; role: 'admin' | 'user' };

export function setAdminAuth() {
  const u: AuthUser = { login: 'admin', role: 'admin' };
  localStorage.setItem(AUTH_KEY, JSON.stringify(u));
}

export function clearAuth() {
  localStorage.removeItem(AUTH_KEY);
}

export function getAdminAuth(): AuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function getAuth(): AuthUser | null {
  return getAdminAuth();
}

export function isAdmin(): boolean {
  return getAdminAuth()?.role === 'admin';
}
