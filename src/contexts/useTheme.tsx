import {createContext, ReactNode, useContext, useState} from "react";

type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({children} : {children: ReactNode}) {
  const [theme, setTheme] = useState<Theme>(document.documentElement.classList.contains("dark") ? "dark" : "light");

  function toggleTheme() {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = 'dark';
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = 'light';
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}