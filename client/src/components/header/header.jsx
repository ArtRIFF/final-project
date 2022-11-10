import React from "react";
import "./style.scss"
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderInterAction from "./HeaderInterAction/HeaderInterAction";


class Header extends React.Component {
  render() {
    return (
      <div className="header__wrap">

        <a className="header-logo__wrap" name="logo" href=" ">
          <img
            src="img/header-icon/logoHeader.svg"
            className="header-logo"
            alt="logo"
          />
        </a>

        <HeaderNav />

        <HeaderInterAction />

      </div>
    );
  }
}

export default Header;
