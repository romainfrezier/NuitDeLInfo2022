import { createContext, useState } from "react";

export const ThemeContext = createContext( {theme: "light", undefined})

export const ContextProvider = ({children}) => {

    const [theme,setTheme] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("theme");
        const initialValue = JSON.parse(saved);
        if (initialValue === "light" || initialValue === "dark"){
            return initialValue
        }
        return "light";
    })

    return(
        <ThemeContext.Provider value={ { theme, setTheme } }>
            {children}
        </ThemeContext.Provider>
    )

}