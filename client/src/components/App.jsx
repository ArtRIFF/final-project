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

import Contact from "../pages/ContactPage/ContactPage";
import AboutUs from "../pages/AboutUsPage/AboutUsPage";
import ProductCard from "../pages/ProductCard/ProductCard";
import Footer from "./Footer/Footer";

import {
  selectorNewCollectionProduct,
  selectBestsellers,
  selectOutlet,
} from "../store/selectors";
import {
  fetchNewCollectionProduct,
  fetchBestsellers,
  fetchOutlet,
} from "../store/actions";

import { useState } from "react";
import ModalWindow from "./ModalWindow";

const App = () => {
  const dispatch = useDispatch();
  const bestsellers = useSelector(selectBestsellers);
  const newCollectionArray = useSelector(selectorNewCollectionProduct);
  const outlet = useSelector(selectOutlet);
  useEffect(() => {
    dispatch(fetchNewCollectionProduct());
    dispatch(fetchBestsellers());
    dispatch(fetchOutlet());
  }, []);
  const [modalActive, setModalActive] = useState(false);
  const [modalText, setModalText] = useState("Error");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="" element={<Header />} /> */}
        <Route path="/cart" element={<CheckOutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/NewCollection"
          element={<CatalogSectionPage arrProduct={newCollectionArray} />}
        />
        <Route
          path="/Bestsellers"
          element={<CatalogSectionPage arrProduct={bestsellers} />}
        />
        <Route
          path="/Outlet"
          element={<CatalogSectionPage arrProduct={outlet} />}
        />
        {/* <Route path="" element={}/> */}
        <Route path="/our_production" element={<OurProductionPage />} />
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        <Route path="/jewelry" element={<CatalogSectionPage />} />
        <Route
          path="products/:cardID"
          element={
            <ProductCard
              modalActive={modalActive}
              setModalActive={setModalActive}
              setModalText={setModalText}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/constract" element={<UnderConstractionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>{" "}
      <ModalWindow
        modalActive={modalActive}
        setModalActive={setModalActive}
        modalText={modalText}
        setModalText={setModalText}
      />
      <Footer />
    </>
  );
};

export default App;
