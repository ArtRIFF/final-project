import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const Items = ({ items, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li>{item.name}</li>
        //зображення товару та решта пропсів
      ))}
    </ul>
  );
};

export default Items;
