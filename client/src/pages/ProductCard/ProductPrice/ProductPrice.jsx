import React, { useEffect, useContext } from "react";
import ProductRating from "../ProductRating";
const ProductPrice = (props) => {
  const { name } = props;
  return (
    <div className="product-card__price">
      <div className="product-card__price-header">
        <div className="product-card__price-header__rewiews">
          <ProductRating />
        </div>
        <h3 className="product-card__price-header__title">{name}</h3>
      </div>
    </div>
  );
};
export default ProductPrice;
