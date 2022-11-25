import "../../styles/components/footer.scss"
import {useTranslation} from "react-i18next";

// import light logos
import linkedinLogoLight from "../../assets/icons/linkedin-logo-light.png"
import githubLogoLight from "../../assets/icons/github-logo-light.png"
import gmailLogoLight from "../../assets/icons/gmail-logo-light.png"
import instagramLogoLight from "../../assets/icons/instagram-logo-light.png"

// import dark logos
import linkedinLogoDark from "../../assets/icons/linkedin-logo-dark.png"
import githubLogoDark from "../../assets/icons/github-logo-dark.png"
import gmailLogoDark from "../../assets/icons/gmail-logo-dark.png"
import instagramLogoDark from "../../assets/icons/instagram-logo-dark.png"
import {useContext} from "react";
import {ThemeContext} from "../../context/context";


const Footer = () => {

    const { t } = useTranslation()

    const { theme } = useContext(ThemeContext)

    return(
        <footer>
            <div id="copyrightAndTerms" className="secondary">
                <p className="text">{ t("footer.copyright") }</p>
                <div id="links">

                    <a href="https://www.linkedin.com/in/lorenzo-italiano-dev/" target="blank">
                        { theme === "dark" ?
                            <img src={linkedinLogoLight} alt="linkedIn link" /> :
                            <img src={linkedinLogoDark} alt="linkedIn link" />
                        }
                    </a>

                    <a href="mailto:lorenzo.italiano34@gmail.com" target="blank">
                        { theme === "dark" ?
                            <img src={gmailLogoLight} alt="link to mail me" />:
                            <img src={gmailLogoDark} alt="link to mail me" />
                        }
                    </a>

                    <a href="https://www.instagram.com/lorenzo_ita_/" target="blank">
                        { theme === "dark" ?
                            <img src={instagramLogoLight} alt="instagram link" />:
                            <img src={instagramLogoDark} alt="instagram link" />
                        }
                    </a>

                    <a href="https://github.com/lorenzo-italiano/" target="blank">
                        { theme === "dark" ?
                            <img src={githubLogoLight} alt="github link" />:
                            <img src={githubLogoDark} alt="github link" />
                        }
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer