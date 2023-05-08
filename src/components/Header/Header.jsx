import NavBurger from "../NavBurger/NavBurger";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo-container">
          <div className="header__logo"></div>
          <div className="header__logo-corner header__logo-corner_top-left"></div>
          <div className="header__logo-corner header__logo-corner_top-right"></div>
          <div className="header__logo-corner header__logo-corner_bottom-right"></div>
          <div className="header__logo-corner header__logo-corner_bottom-left"></div>
        </a>
        <div className="nav-menu">
          <ul className="nav-menu__container">
            <li className="nav-menu__item">
              <a href="/" className="nav-menu__link">
                Главная
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/mock-address/change-me" className="nav-menu__link">
                Технология
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/mock-address/change-me" className="nav-menu__link">
                График полетов
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/mock-address/change-me" className="nav-menu__link">
                Гарантии
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/mock-address/change-me" className="nav-menu__link">
                О компании
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="/mock-address/change-me" className="nav-menu__link">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <NavBurger />
      </div>
      <div className="header__background"></div>
    </header>
  );
};

export { Header };
