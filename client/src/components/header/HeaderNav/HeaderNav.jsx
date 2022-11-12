import React, { useState } from "react";
import "./HeaderNav.scss";

const HeaderNav = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuCliked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuCliked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuCliked);
  };

  return (
    <div style={{ width: "100", height: "100vh" }}>
      <ul className="header-nav__menu-wrap">
        <li className="header-nav">
          <a name="jewelry" href="/" className="header-nav__menu_item">
            Jewerly
          </a>
        </li>
        <li className="header-nav">
          <a href="/collection" className="header-nav__menu_item">
            Collections
          </a>
        </li>
        <li className="header-nav">
          <a href=" /outlet" className="header-nav__menu_item">
            %Outlet
          </a>
        </li>
        <li className="header-nav">
          <a href="/production " className="header-nav__menu_item">
            Our production
          </a>
        </li>
      </ul>

      <div className="header-nav__button">
        <img
          className="header-nav__button-icon"
          alt="arrow"
          src="img/header-icon/horizontal_menu.png"
        ></img>
      </div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}></div>
    </div>
  );
};

export default HeaderNav;