import React from "react";
import "./style.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderInterAction from "./HeaderInterAction/HeaderInterAction";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <section className="header-wrap">
        <div className="container">
          <div className="header-wrap__display ">
              <NavLink to="/"><img
                src="img/header-icon/logoHeader.svg"
                className="header-logo"
                alt="logo"
              />
              </NavLink>
              <HeaderNav />
              <HeaderInterAction />
          </div>
        </div>
      </section>
    );
  }

export default Header;
