import React from "react";
import "./HeaderRegistration.scss";

class HeaderRedistration extends React.Component {
  render() {
    return (
      <div className="header-redistration">
        <a className="header-redistration__icon_wrap">
          <img
            className="header-redistration__icon"
            src="img/header-icon/Registrationicon.svg"
            alt="redistration login"
          ></img>
        </a>
      </div>
    );
  }
}

export default HeaderRedistration;
