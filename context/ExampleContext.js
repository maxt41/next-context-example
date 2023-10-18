import { createContext, useState } from "react";

const themeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return <themeContext.Provider value={{ theme, toggleTheme}}>{children}</themeContext.Provider>

};

export { themeContext, ThemeContextProvider }
