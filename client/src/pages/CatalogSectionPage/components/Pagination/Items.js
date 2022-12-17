import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Items = ({
  items,
  loading,
  filterSearchingResults,
  allCollectionArrayIsFiltered,
}) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (allCollectionArrayIsFiltered === true) {
    if (filterSearchingResults === 0) {
      return (
        <div style={{ fontWeight: "bold", fontSize: "2.2em" }}>
          sorry, no items matching your search criteria
        </div>
      );
    }  
  }

  return (
    <ul>
      {items.map((item, index) => (
        <>
          <li>{item.name}</li>
        </>
        //зображення товару та решта пропсів
      ))}
    </ul>
  );
};

export default Items;
