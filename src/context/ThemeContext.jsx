import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const savedMode = localStorage.getItem('isDark');
        setIsDark(savedMode === 'false' ? false : true);
      }, []);
    const handleTheme = ()=>{
        setIsDark(!isDark)
        localStorage.setItem('isDark', !isDark);
    }

    return <ThemeContext.Provider value={{
        isDark,handleTheme
    }}>
        {children}
    </ThemeContext.Provider>
}