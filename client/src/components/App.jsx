import * as React from "react";
import Header from "./Header/Header";
import CollectionSection from "./CollectionSection";
import CategorySection from "./CategorySection";

import Bestsellers from "./Bestsellers";
import Outlet from "./Outlet";

// import NewsSection from "./NewsSection/NewsSection";

// import SubscribeSection from "./SubscribeSection/SubscribeSection";

const App = () => {
  return (
    <> 
      <h1 className="title"></h1>
      <Header />
      <Bestsellers/>
      <Outlet/>
      <CollectionSection />
      <CategorySection />
    </>
  );
};

export default App;
