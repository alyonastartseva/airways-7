const PREFIX = 'air.';

export function getJSON<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function setJSON<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (err) {
    if (import.meta.env.MODE !== 'production') {
      console.warn('setJSON failed:', err);
    }
  }
}
