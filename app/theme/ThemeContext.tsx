import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { darkColors, lightColors } from "./colors";
import { ThemeProps } from "./theme.types";
import { typography } from "./typography";

const ThemeContext = createContext<ThemeProps>({
  colors: lightColors,
  typography,
  isDark: false,
  toggleTheme: () => {},
});

const STORAGE_KEY = "@app_theme_mode";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");

  useEffect(() => {
    (async () => {
      const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTheme === "dark") setIsDark(true);
      else if (savedTheme === "light") setIsDark(false);
      else setIsDark(systemScheme === "dark");
    })();
  }, []);

  const toggleTheme = async () => {
    setIsDark((prev) => {
      const newValue = !prev;
      AsyncStorage.setItem(STORAGE_KEY, newValue ? "dark" : "light");
      return newValue;
    });
  };

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ colors, typography, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
