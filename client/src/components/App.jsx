import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Header from "./Header/Header";

import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import Login from "../pages/LoginPage/Login/Login";
import Registration from "../pages/LoginPage/RegistrationPage/Registration";

import CatalogSectionPage from "../pages/CatalogSectionPage/CatalogSectionPage";
import OurProductionPage from "../pages/OurProductionPage/OurProductionPage";

import UnderConstractionPage from "../pages/UnderConstructionPage/UnderConstructionPage";
import ErrorPage from "../pages/404ErrorPage/404ErrorPage";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Contact from "../pages/ContactPage/ContactPage";
import AboutUs from "../pages/AboutUsPage/AboutUsPage";
import ProductCard from "../pages/ProductCard/ProductCard";
import WishList from "../pages/WishList/WishList";
import SearchPage from "./Header/HeaderInterAction/Search/SearchPage/SearchPage";
import Footer from "./Footer/Footer";

import {
  selectorNewCollectionProduct,
  selectBestsellers,
  selectOutlet,
  selectorAllCollectionProduct,
} from "../store/selectors";
import {
  fetchNewCollectionProduct,
  fetchBestsellers,
  fetchOutlet,
  fetchAllCollectionProduct,
} from "../store/products/productsSlice";

import { UserContextProvider } from "../context/UserContext";

import { useState } from "react";
import ModalWindow from "./ModalWindow";
import UserPage from "../pages/LoginPage/UserPage/UserPage";
import ChangePass from "../pages/LoginPage/UserPage/ChangePass";

const App = () => {
  const dispatch = useDispatch();
  const bestsellers = useSelector(selectBestsellers);
  const newCollectionArray = useSelector(selectorNewCollectionProduct);
  const outlet = useSelector(selectOutlet);
  useEffect(() => {
    dispatch(fetchNewCollectionProduct());
    dispatch(fetchBestsellers());
    dispatch(fetchOutlet());
    dispatch(fetchAllCollectionProduct());
  }, []);

  const productArray = useSelector(selectorAllCollectionProduct);
  const earringsArray = productArray.filter(
    (element) =>
      element.categories === "earring" ||
      element.categories === "child-earrings"
  );
  const braceletsArray = productArray.filter(
    (element) => element.categories === "bracelet"
  );
  const pendantArray = productArray.filter(
    (element) => element.categories === "pendant"
  );
  const ringsArray = productArray.filter(
    (element) =>
      element.categories === "engagement-ring" ||
      element.categories === "wedding-ring"
  );
  const pearlArray = productArray.filter(
    (element) => element.categories === "pearl"
  );
  const crossArray = productArray.filter(
    (element) => element.categories === "cross"
  );
  const [modalActive, setModalActive] = useState(false);
  const [modalText, setModalText] = useState("Error");
  return (
    <>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/userPage" element={<UserPage />} />
          <Route path="/changeUserPassword" element={<ChangePass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/NewCollection"
            element={<CatalogSectionPage arrProduct={newCollectionArray} />}
          />
          <Route
            path="/Earrings"
            element={<CatalogSectionPage arrProduct={earringsArray} />}
          />
          <Route
            path="/Bracelets"
            element={<CatalogSectionPage arrProduct={braceletsArray} />}
          />
          <Route
            path="/Pendant"
            element={<CatalogSectionPage arrProduct={pendantArray} />}
          />
          <Route
            path="/Rings"
            element={<CatalogSectionPage arrProduct={ringsArray} />}
          />
          <Route
            path="/Pearl"
            element={<CatalogSectionPage arrProduct={pearlArray} />}
          />
          <Route
            path="/Cross"
            element={<CatalogSectionPage arrProduct={crossArray} />}
          />
          <Route
            path="/Bestsellers"
            element={<CatalogSectionPage arrProduct={bestsellers} />}
          />
          <Route
            path="/Outlet"
            element={<CatalogSectionPage arrProduct={outlet} />}
          />
          <Route path="/our_production" element={<OurProductionPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/jewelry" element={<CatalogSectionPage />}/>
          <Route
            path="products/:cardID"
            element={
              <ProductCard
                modalActive={modalActive}
                setModalActive={setModalActive}
                setModalText={setModalText}
                earringsArray={earringsArray}
                braceletsArray={braceletsArray}
                pendantArray={pendantArray}
                ringsArray={ringsArray}
                pearlArray={pearlArray}
                crossArray={crossArray}
                bestsellers={bestsellers}
              />
            }
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/constract" element={<UnderConstractionPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ModalWindow
          modalActive={modalActive}
          setModalActive={setModalActive}
          modalText={modalText}
          setModalText={setModalText}
        />
        <Footer />
      </UserContextProvider>
    </>
  );
};

export default App;