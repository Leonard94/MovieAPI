import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="header__menu">
                    <ul className="header__list">
                        <li>
                            <NavLink to='/' exact className="header__link" activeClassName='activeLink'>Топ</NavLink>
                        </li>
                        <li>
                            <NavLink to='/search' className="header__link" activeClassName='activeLink'>Поиск</NavLink>
                        </li>
                        <li>
                            <NavLink to='/saved' className="header__link" activeClassName='activeLink'>Избранное</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;