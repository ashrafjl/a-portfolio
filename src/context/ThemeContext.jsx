import React, { createContext, useEffect, useState } from 'react'

export const themeContext = createContext();

export const ThemeContext = ({children})=>{
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {
        const savedMode = localStorage.getItem('isDark');
        setIsDark(savedMode);
      }, []);
    const handleTheme = ()=>{
        setIsDark(!isDark)
        localStorage.setItem('isDark', !isDark);
    }

    return <themeContext.Provider value={{
        isDark,handleTheme
    }}>
        {children}
    </themeContext.Provider>
}