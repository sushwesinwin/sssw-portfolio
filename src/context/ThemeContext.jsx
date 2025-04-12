import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Get saved theme preference or OS preference
        const savedTheme = localStorage.getItem('darkMode')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return savedTheme ? JSON.parse(savedTheme) : prefersDark
    })

    // Apply changes to DOM and save preference
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)