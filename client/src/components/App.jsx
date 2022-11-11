import * as React from "react";
import OurAdvantageSection from "./OurAdvantageSection/OurAdvantageSection";
import CollectionSection from "./CollectionSection";
import CategorySection from "./CategorySection";
import SubscribeSection from "./SubscribeSection/SubscribeSection";

const App = () => {
  return (
    <>
      <h1 className="title">Start Project</h1>
      <CollectionSection />
      <CategorySection />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil
        est eveniet labore illum, repudiandae aperiam assumenda possimus earum,
        laborum velit voluptate autem fugiat provident. Suscipit architecto
        consequuntur voluptatibus sint.
      </p>
    </>
  );
};

export default App;
