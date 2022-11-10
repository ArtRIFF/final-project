import React from "react";
import { object } from "yup";
import "./HeaderNav.scss";

class HeaderNav extends React.Component {
  render() {
    // let nav = {
    //   nav1: "jewelry",
    //   nav2: "collections",
    //   nav3: "outlet",
    //   nav4: "production",
    // };

    return (
      <ul className="header-nav__menu">
        <li>
          <a name="jewelry" href=" " className="header-nav__menu_item">
            Jewerly
          </a>
        </li>
        <li>
          <a name="collections" href=" " className="header-nav__menu_item">
            Collections
          </a>
        </li>
        <li>
          <a name="outlet" href=" " className="header-nav__menu_item">
            %Outlet
          </a>
        </li>
        <li>
          <a name="production" href=" " className="header-nav__menu_item">
            Our production
          </a>
        </li>
      </ul>
    );
  }
}
export default HeaderNav;
