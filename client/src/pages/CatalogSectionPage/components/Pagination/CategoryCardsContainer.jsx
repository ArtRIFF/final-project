import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CategorySectionCard from "../../../../components/CatalogSection/CategorySectionCard";
import "./CategoryCardsContainer.scss";

const CategoryCardsContainer = ({
  loading,
  allCollectionArray,
  filterSearchingResults,
}) => {
  if (!allCollectionArray) {
    return <LoadingSpinner />;
  }


    // if (allCollectionArray) {
    //   return (
    //     <div
    //       style={{
    //         fontFamily: "Libre Bodoni Bold",
    //         fontWeight: "200",
    //         fontSize: "32px",
    //         textAlign: "center",
    //         paddingTop: "180px",
    //       }}
    //     >
    //       Sorry, no items matching your search criteria
    //     </div>
    //   );
    // }

  return (
      <div className="categoryCards__grid">
        {allCollectionArray&&allCollectionArray.map((card) => (
          <div className="CategorySectionCard__wrapper" key={Math.random()}>
            <CategorySectionCard product={card} />
          </div>
        ))}
      </div>
  );
};

export default CategoryCardsContainer;
