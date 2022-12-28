import React, {useContext, useEffect, useState} from "react";
import "./HeaderRegistration.scss";
import {NavLink} from "react-router-dom";
import {UserContext} from "../../../../context/UserContext";
import {ReactComponent as LoginIcon} from "../img/Registrationicon.svg";
import {Menu, MenuItem} from "@mui/material";


const HeaderRegistration = () => {
  const {userInfo, setUserInfo, clearToken} = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setUserInfo(null);
    clearToken()
  }


  return (
    <div className="header-registration">

      <LoginIcon className={userInfo ? "filled" : "header-registration__icon"} onClick={handleClick}/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NavLink to={userInfo ? "/userPage" : "/login"}>
          <MenuItem  onClick={handleClose} style={{color: "black"}}
          > {userInfo ? "My account" : "Log in"}</MenuItem>
        </NavLink>
        <NavLink to={userInfo ? "/" : "/registration"}>
          <MenuItem style={{color: "black"}} onClick={userInfo ? handleLogOut : handleClose}>{userInfo ? "Logout" : "Registration"}</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );

}

export default HeaderRegistration;
