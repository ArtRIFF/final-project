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
    <div className="nav">
      <ul className="header-nav__menu-wrap">
        <li className="header-nav header-nav__menu_item">
            Jewerly
        </li>
        <li className="header-nav header-nav__menu_item">
            Collections
        </li>
        <li className="header-nav header-nav__menu_item"> 
      %Outlet
        </li>
        <li className="header-nav header-nav__menu_item">
          Our Production
        </li>
      </ul>
      <nav className="nav">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <ul className="header-nav-mobil__menu-wrap">
          <li className="header-nav-mobil">
            <a name="jewelry" href="/" className="header-nav-mobil__menu_item">
              Jewerly
            </a>
          </li>
          <li className="header-nav-mobil">
            <a href="/collection" className="header-nav-mobil__menu_item">
              Collections
            </a>
          </li>
          <li className="header-nav-mobil">
            <a href=" /outlet" className="header-nav-mobil__menu_item">
              %Outlet
            </a>
          </li>
          <li className="header-nav-mobil">
            <a href="/production " className="header-nav-mobil__menu_item">
              Our production
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
