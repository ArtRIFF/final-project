import * as React from "react";
import Header from "./Header/Header";
import CollectionSection from "./CollectionSection";
import CategorySection from "./CategorySection";
import ProductCard from "../pages/ProductCard/ProductCard";
// import NewsSection from "./NewsSection/NewsSection";

// import SubscribeSection from "./SubscribeSection/SubscribeSection";

const App = () => {
  return (
    <>
      <h1 className="title"></h1>
      <Header />

      <CollectionSection />
      <CategorySection />
    </>
  );
};

export default App;
