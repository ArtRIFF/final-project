import React from "react";
import { NavLink } from "react-router-dom";
import HeaderRegistration from "./HeaderRegistration/HeaderRegistration";
import HeaderCart from "./HeaderCart/HeaderCart";
import Search from "./Search/Search";

import "./HeaderInterAction.scss";

const HeaderInterAction = () => {
    return(
      <div className="header-interaction__wrap">
        <Search/>
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
