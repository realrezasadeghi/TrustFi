import { colors as themeColors } from '@/presentation/theme'
import { ColorSchemeName, useColorScheme } from 'react-native';
import React, { createContext, useState, PropsWithChildren, useMemo } from 'react';

type ThemeContextType = {
  mode: ColorSchemeName,
  toggleTheme: () => void;
  colors: typeof themeColors.light;
}

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState(useColorScheme());

  const toggleTheme = () => {
    const isDarkMode = mode === 'dark'
    setMode(isDarkMode ? 'light' : 'dark')
  };

  const colors = useMemo(() => mode === 'dark' ? themeColors.dark : themeColors.light, [mode])

  return (
    <ThemeContext.Provider value={{ colors, toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
