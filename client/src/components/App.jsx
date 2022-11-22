import * as React from "react";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import CategorySection from "../components/CatalogSection/CategorySection";
import ProductCard from "../pages/ProductCard/ProductCard";
import NewsSection from "./NewsSection/NewsSection";

import OurAdvantageSection from "./OurAdvantageSection/OurAdvantageSection";
import Outlet from "./Outlet";
import Bestsellers from "./Bestsellers";
import SubscribeSection from "./SubscribeSection/SubscribeSection";
import Footer from "./Footer/Footer";

import CheckOutPage from '../pages/CheckOutPage/CheckOutPage'
//
import CatalogSectionPage from "../pages/CatalogSectionPage/CatalogSectionPage";

const App = () => {
  return (
    <>
      {/* <h1 className="title"></h1>
      <Header />
      <HeroSection />
      <Bestsellers />
      <NewsSection />
      <Outlet />
      <CategorySection />
      <ProductCard />
      <OurAdvantageSection />
      <SubscribeSection />
      <Footer /> */}
    {/* <CheckOutPage/> */}
    <CatalogSectionPage/>
    </>
  );
};

export default App;