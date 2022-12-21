import React from "react";

const Items = ({ items, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
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
