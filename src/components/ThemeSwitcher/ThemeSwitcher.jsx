import {useContext, useEffect} from "react";
import {ThemeContext} from "../../context/context";
import CheckBox from "../CheckBox/CheckBox";
import "../../styles/components/themeSwitcher.scss"

const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect( () => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    const handleOnChange = event => {
        event.target.checked ? setTheme('dark') : setTheme('light')
    }

    const initialState = () => {
        return theme === "dark"
    }

    return(
        <div className="themeSwitcher">
            <CheckBox onChange={handleOnChange} initialState={initialState}/>
        </div>
    )
}

export default ThemeSwitcher
