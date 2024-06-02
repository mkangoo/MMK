import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="content">
            <ul className="nav-bar">
                <Link to="/products">
                    <li>Продукция</li>
                </Link>
                <Link to="company">
                    <li>Компания</li>
                </Link>
                <li>
                    <a href="https://market.mmk.ru/">Маркетплейс</a>
                </li>
                <li>
                    <a href="https://filestone.mmk.ru/">Filestone</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
