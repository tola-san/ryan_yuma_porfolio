import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme(defaultTheme: Theme = 'dark') {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    setTheme(defaultTheme);
  }, [defaultTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    return () => {
      root.classList.remove('dark');
    };
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const style = document.createElement('style');
    style.textContent = '*,*::before,*::after{transition:none!important}';
    document.head.appendChild(style);

    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');

    window.requestAnimationFrame(() => {
      void document.documentElement.offsetHeight;
      window.requestAnimationFrame(() => style.remove());
    });
  }, []);

  return { theme, toggleTheme };
}
