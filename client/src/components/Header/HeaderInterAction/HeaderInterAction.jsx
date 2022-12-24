import React from "react";
import Button from "../../Button/ButtonAll/ButtonAll";
import { NavLink } from "react-router-dom";
import HeaderRegistration from "./HeaderRegistration/HeaderRegistration";
import HeaderCart from "./HeaderCart/HeaderCart";

import "./HeaderInterAction.scss";

const HeaderInterAction = () => {
    return(
      <div className="header-interaction__wrap">
        <div className="header-search">
          <input type="text" placeholder="Search" className="nav__search"/>
          <Button text='Search' className='section__btn-seacrh' id='section__btn' />
        </div>
        <div className="header__icon">
          <NavLink to="/favourite" className="header-favorites__icon">
            <img
              className="header-favorites__icon"
              src="img/header-icon/Favouritesicon.svg"
              alt="favorites jewelry">
            </img>
          </NavLink>
          <HeaderCart/>
          <HeaderRegistration/>
        </div>
      </div>
    ); 
  }

export default HeaderInterAction;
