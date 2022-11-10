import React from "react";
import "./HeaderSearch";

class HeaderSearch extends React.Component {
  render() {
    return(
    <div className="header-search">
      <a className="header-search__icon_wrap">
      <img className="header-search__icon" src="../../../../../public/img/header-icon/Searchicon.png" alt="search info"></img>
      </a>
    </div>);
  }
}

export default HeaderSearch;
