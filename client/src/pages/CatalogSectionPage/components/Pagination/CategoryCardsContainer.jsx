import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CategorySectionCard from "../../../../components/CatalogSection/CategorySectionCard";
import "../../../../components/CatalogSection/CategorySectionCard/CategorySectionCard.scss";
import "./CategoryCardsContainer.scss";

const CategoryCardsContainer = ({
  items,
  loading,
  hasAnyFilters,
  allCollectionArray,
  filterSearchingResults,
}) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (hasAnyFilters === true) {
    if (allCollectionArray.length === filterSearchingResults) {
      return (
        <div
          style={{
            fontFamily: "Libre Bodoni Bold",
            fontWeight: "200",
            fontSize: "32px",
            textAlign: "center",
            paddingTop: "180px",
          }}
        >
          Sorry, no items matching your search criteria
        </div>
      );
    }
  }

  return (
    <div className="categoryCard">
      <div className="categoryCards__grid">
        {items.map((card) => (
          <div className="CategorySectionCard__wrapper" key={Math.random()}>
            <CategorySectionCard product={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCardsContainer;
