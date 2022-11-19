import * as React from "react";
import Header from "./Header/Header";
import CollectionSection from "./CollectionSection";
import CategorySection from "../components/CatalogSection/CategorySection";
import ProductCard from "../pages/ProductCard/ProductCard";
// import NewsSection from "./NewsSection/NewsSection";

// import SubscribeSection from "./SubscribeSection/SubscribeSection";
import Bestsellers from "./Bestsellers";
import Outlet from "./Outlet";
const App = () => {
  return (
    <>
      {/* <h1 className="title"></h1>
      <Header />
      <Bestsellers />
      <Outlet />
      <CollectionSection />
      <CategorySection /> */}
      <ProductCard />
    </>
  );
};

export default App;
