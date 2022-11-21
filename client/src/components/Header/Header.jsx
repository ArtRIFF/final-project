import React from "react";
import "./style.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderInterAction from "./HeaderInterAction/HeaderInterAction";

class Header extends React.Component {
  render() {
    return (
      <section className="header-wrap">
        <div className="container">
          <div className="header-wrap__display ">
              <a href="#"><img
                src="img/header-icon/logoHeader.svg"
                className="header-logo"
                alt="logo"
              />
              </a>
            <HeaderNav />
            <HeaderInterAction />
          </div>
        </div>
      </section>
    );
  }
}
export default Header;
