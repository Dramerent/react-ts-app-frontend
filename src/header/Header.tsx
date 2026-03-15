import "./Header.scss"
import mainLogo from "../assets/public/static/mainLogo.svg"
import { useNavigate } from "react-router-dom"
export function Header(){
    const nav = useNavigate()
    return(
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <img src={mainLogo} alt="" />
                    </div>
                    <div className="header__links-container">
                        <ul className="header__links">
                            <li className="header__link">главная</li>
                            <li className="header__link">главная</li>
                            <li className="header__link">главная</li>
                            <li className="header__link">главная</li>
                            <li className="header__link">главная</li>
                        </ul>
                    </div>
                    <div className="add-card-button">
                        <button type="button" onClick={() => nav('/createCardForm')}>добавить карточку</button>
                    </div>
                </div>
            </header>
        </>
    )
}