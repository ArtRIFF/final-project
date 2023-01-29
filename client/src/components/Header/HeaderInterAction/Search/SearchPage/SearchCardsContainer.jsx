import React from "react";
import CategorySectionCard from "../../../../CatalogSection/CategorySectionCard/CategorySectionCard";
import "./SearchPage.scss";
import { useSelector } from "react-redux";

const CategoryCardsContainer = ({products}) => {
  
  return (
      <div className="result__search">
        {products.map((card, index) => {
            return (
            <CategorySectionCard product={card}/>
            );
        })}
      </div>
  );
};

export default CategoryCardsContainer;
