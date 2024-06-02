import logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <Link to="/MMK">
                    <div className="header__logo">
                        <img src={logo} width={60} height={60} alt="Logo" />
                        <span>магнитогорский металлургический комбинат</span>
                    </div>
                </Link>
                <ul className="header__info">
                    <Link to="/passwordCheck">
                        <li>Проверка пароля</li>
                    </Link>
                    <Link to="/recommendedSoftware">
                        <li>Рекомендуемое ПО</li>
                    </Link>
                    <Link to="/checkPartner">
                        <li>Проверка Контрагентов</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
