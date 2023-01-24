import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from 'react-router-dom';

import "./HeaderInterAction/Search/SearchPage/SearchPage.scss";
import "./HeaderInterAction/SearchBurger/SearchPageBurger/SearchPageBurger.scss";

import { sendRequest } from "../../helpers/sendRequest";
import { API } from "../../config/API";
import Button from "../Button/ButtonAll/ButtonAll";

import { selectInCart } from "../../store/selectors";
import { useSelector } from "react-redux";

import { Menu, MenuItem } from "@mui/material";
import { ReactComponent as LoginIcon } from "../Header/HeaderInterAction/img/Registrationicon.svg";
import { UserContext } from "../../context/UserContext";
import IconCart from "./HeaderInterAction/IconCart/IconCart";

const Header = ({ active, setActive }) => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuCliked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuCliked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuCliked);
  };

  const [searchPhrase, setSearchPhrase] = useState("");
  const handleSubmit = () => {
    const newSearchPhrases = {
      query: searchPhrase
    };
    sendRequest(`${API}products/search`, 'POST',
      {
        body: JSON.stringify(newSearchPhrases),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(r => {
        if (r.enabled) {
          alert('Successful search')
        } else {
          console.log('FAIL')
          console.log(r)
        }
      })
      .catch(e => {
        console.error(e);
      })
  }

  const inCart = useSelector(selectInCart);
  let itemsInCart;
  if (inCart.length > 0) {
    itemsInCart = inCart.reduce((acc, cur) => acc + cur.quantity, 0)
  }

  const { userInfo, setUserInfo, clearToken } = useContext(UserContext);

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
    <header className="header">
      <div className="container">
        <div className="header__container">
          <NavLink to="/">
            <img
              src="img/header-icon/logoHeader.svg"
              className="header-logo"
              alt="SoVa_logo"
            />
          </NavLink>
          <ul className="header__nav">
            <NavLink to="/jewelry">
              <li className='nav__list'>
                Jewelry
              </li>
            </NavLink>
            <NavLink to="/outlet">
              <li className='nav__list'>
                Outlet
              </li>
            </NavLink>
            <NavLink to="/our_production">
              <li className='nav__list'>
                Our Production
              </li>
            </NavLink>
          </ul>
          <div className={menu_class}>
            <ul className="header-nav-mobil__menu-wrap">
              <li className="header-nav-mobil">
                <NavLink to="/jewelry" className="header-nav-mobil__menu_item">
                  Jewerly
                </NavLink>
              </li>
              <li className="header-nav-mobil">
                <NavLink to="/outlet" className="header-nav-mobil__menu_item">
                  Outlet
                </NavLink>
              </li>
              <li className="header-nav-mobil">
                <NavLink to="/our_production" className="header-nav-mobil__menu_item">
                  Our production
                </NavLink>
              </li>
              <li className="header-nav-mobil search__container">
                <div className="header-burger">
                  <input
                    type="text"
                    placeholder="Search"
                    className="nav__search-burger"
                    onChange={(e) => setSearchPhrase(e.target.value)}
                  />
                  <NavLink to="/search">
                    <Button
                      text='Search'
                      className='section__btn-seacrh'
                      id='section__btn'
                      onClick={handleSubmit}
                    />
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="header__icon">
            <div className="header__search">
              <input
                type="text"
                placeholder="Search"
                className="nav__search"
                onChange={(e) => setSearchPhrase(e.target.value)}
              />
              <NavLink to="/search">
                <Button
                  text='Search'
                  className='section__btn-seacrh'
                  id='section__btn'
                  onClick={handleSubmit}
                />
              </NavLink>
            </div>
            <div className="header__favorites">
              <NavLink to="/wishlist" >
                <img
                  className="header__favorite-icon"
                  src="img/header-icon/Favouritesicon.svg"
                  alt="favorites"
                ></img>
              </NavLink>
            </div>
            <IconCart/>
            <div className="header-registration">
              <LoginIcon className={userInfo ? "filled" : "header-registration__icon"} onClick={handleClick} />
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
                  <MenuItem onClick={handleClose} style={{ color: "black" }}
                  > {userInfo ? "My account" : "Log In"}</MenuItem>
                </NavLink>
                <NavLink to={userInfo ? "/" : "/registration"}>
                  <MenuItem style={{ color: "black" }} onClick={userInfo ? handleLogOut : handleClose}>{userInfo ? "Logout" : "Registration"}</MenuItem>
                </NavLink>
              </Menu>
            </div>
          </div>
          <nav className="nav">
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Header;
