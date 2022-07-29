import React, { useEffect, useState } from 'react';

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}

const ThemeContext = React.createContext(initialState);

function ThemeProvider({children}){
    //Default theme light
    const [dark, setDark] = useState(false)

    // On mount, read the preferred theme from the persistence
    useEffect(()=>{
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    },[dark])

    //to toggle between light and dark mode
    const toggle = () => {
        localStorage.setItem('dark', JSON.stringify(!dark))
        setDark(!dark)
    }
     // Filter the styles based on the theme selected
    const theme = dark ? themes.dark : themes.light
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
        {children}
        </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }