
"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from "react";

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [isDark, setIsDark] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // 1. Load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDark(true);
        }
        setIsLoaded(true);
    }, []);

    // 2. Save theme when it changes
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;

        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark, isLoaded]);

    const toggleTheme = () => {
        setIsDark((current) => !current);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}
