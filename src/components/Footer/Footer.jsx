import "../../styles/components/footer.scss";

import {useContext} from "react";
import {ThemeContext} from "../../context/context";

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <footer>
            <div id="copyrightAndTerms" className="secondary">
                <p className="text">Copyright</p>
            </div>
        </footer>
    )
}

export default Footer