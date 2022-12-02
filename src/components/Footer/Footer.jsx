import "../../styles/components/footer.scss";

import {useContext} from "react";
import {ThemeContext} from "../../context/context";

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <footer>
            <div id="copyrightAndTerms" className="secondary">
                <p className="text">&copy; 2022, Les grosses BREL - Nuit de l'info 2022</p>
            </div>
        </footer>
    )
}

export default Footer