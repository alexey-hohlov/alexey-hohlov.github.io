import { createContext, useEffect, useState, type ReactNode } from 'react';

import { LOCAL_STORAGE_KEYS } from '@/constants';

type Theme = 'light' | 'dark';

interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProvider {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(
      LOCAL_STORAGE_KEYS.THEME
    ) as Theme | null;
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(LOCAL_STORAGE_KEYS.THEME)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
