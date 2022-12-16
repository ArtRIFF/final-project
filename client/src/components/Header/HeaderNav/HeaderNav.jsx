import React, { useState } from "react";
import "./HeaderNav.scss";
import { NavLink } from 'react-router-dom';
import Button from '../../Button/ButtonAll/ButtonAll'

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
          <NavLink to="/jewelry" className="header-nav__menu_item">Jewelry</NavLink>
          </li>
          <li className="header-nav header-nav__menu_item">
          <NavLink to="/collection" className="header-nav__menu_item">Collections</NavLink>
          </li>
          <li className="header-nav header-nav__menu_item"> 
          <NavLink to="/outlet" className="header-nav__menu_item">%Outlet</NavLink>
          </li>
        <li className="header-nav header-nav__menu_item">
        <NavLink to="/our_production" className="header-nav__menu_item">Our Production</NavLink>
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
            <NavLink to="/jewelry" className="header-nav-mobil__menu_item">
              Jewerly
            </NavLink>
          </li>
          <li className="header-nav-mobil">
            <NavLink to="/collection" className="header-nav-mobil__menu_item">
              Collections
            </NavLink>
          </li>
          <li className="header-nav-mobil">
            <NavLink to="/outlet" className="header-nav-mobil__menu_item">
              %Outlet
            </NavLink>
          </li>
          <li className="header-nav-mobil">
            <NavLink to="/our_production" className="header-nav-mobil__menu_item">
              Our production
            </NavLink>
          </li>
          <li className="header-nav-mobil search__container">
            <input 
              type="text" 
              placeholder="Search" 
              className="nav__search"/>
            <Button text='Search' className='section__btn-seacrh' id='section__btn' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
