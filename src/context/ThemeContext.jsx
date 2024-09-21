import React, { createContext, useEffect, useState } from 'react'

export const themeContext = createContext();

export const ThemeContext = ({children})=>{
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const savedMode = localStorage.getItem('isDark') === 'true';
        console.log(savedMode);
        
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