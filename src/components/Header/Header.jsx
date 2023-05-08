import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Link } from 'react-router-dom';

import { navigationItems } from "./constants";
import "./Header.scss";

const Header = () => {
  const navigationRef = useRef(null);
  const [openBurger, setOpenBurger] = useState(false);

  const handleBurgerClick = () => {
    setOpenBurger(!openBurger);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setOpenBurger(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navigationRef]);

  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo-container">
          <div className="header__logo"></div>
          <div className="header__logo-corner header__logo-corner_top-left"></div>
          <div className="header__logo-corner header__logo-corner_top-right"></div>
          <div className="header__logo-corner header__logo-corner_bottom-right"></div>
          <div className="header__logo-corner header__logo-corner_bottom-left"></div>
        </Link>
        <div className="header__nav-menu">
          <ul className="header__nav-menu-container">
            {navigationItems.map((item) => (
              <li className="header__nav-menu-item" key={item.text}>
                <Link href={item.to} className="header__nav-menu-link">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__nav-burger" ref={navigationRef}>
          <button
            className="header__nav-burger-button-menu"
            type="button"
            onClick={handleBurgerClick}
          >
            <div
              className={classNames("header__nav-burger-button-menu-lines", {
                "header__nav-burger-button-menu-lines_active": openBurger,
              })}
            ></div>
          </button>
          <ul
            className={classNames("header__nav-burger-menu-burger", {
              "header__nav-burger-menu-burger_open": openBurger,
            })}
          >
            {navigationItems.map((item) => (
              <li className="header__nav-burger-item" key={item.text}>
                <Link href={item.to} className="header__nav-burger-link">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header__background" />
    </header>
  );
};

export { Header };
