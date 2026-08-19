import { useEffect, useState } from 'react';

const STORAGE_KEY = 'grg-theme';

/**
 * Tiny theme hook — reads/persists the dark/light choice in localStorage
 * and toggles the `dark` class on <html>. Kept isolated from the rest of
 * the app; only the header needs it.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
