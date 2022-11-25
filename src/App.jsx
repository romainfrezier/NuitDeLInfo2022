import Router from "./router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {ThemeContext} from "./context/context";
import {useContext} from "react"

function App() {

    const { theme } = useContext(ThemeContext)

    return (
        <div id="app" className={theme}>
            <Header />

            <Router />

            <Footer />
        </div>
    )
}

export default App
