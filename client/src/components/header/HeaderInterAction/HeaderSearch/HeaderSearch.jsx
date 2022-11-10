import React from "react";
import "./HeaderSearch";

class HeaderSearch extends React.Component {
  render() {
    return (
      <div className="header-search">
        <a className="header-search__icon_wrap">
          <img
            className="header-search__icon"
            src="img/header-icon/Searchicon.svg"
            alt="search info"
          ></img>
        </a>
      </div>
    );
  }
}

export default HeaderSearch;
