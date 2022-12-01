import "../../styles/components/header.scss"
import {useState} from "react";
import {Link} from "react-router-dom";

import closeCross from "../../assets/icons/cross.png"
import burgerMenu from "../../assets/icons/burger-bar.png"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {

    const [burgerOpen,setBurgerOpen] = useState(false)

    return(
        <header className="secondary">
            <a href="/" className="sideTitle text">Home</a>
            <nav id="basicNav">
                <div className="container">
                    <Link to="/about" className="text">A propos</Link>
                </div>
                <div className="container">
                    <Link to="/minijeux" className="text">Mini-jeux</Link>
                </div>
                <ThemeSwitcher />
            </nav>

            <div id="burger">
                <img src={burgerMenu} alt="burger menu" onClick={() => {setBurgerOpen(true)}} />

                {burgerOpen && <img id="closeCross" src={closeCross} alt="close burger menu" onClick={() => {setBurgerOpen(false)}} /> }

                {burgerOpen &&
                    <div className="modal">
                        <div className="container">
                            <a className="burgerNav">A propos</a>
                        </div>
                        <div className="container">
                            <a className="burgerNav">Mini-jeux</a>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header