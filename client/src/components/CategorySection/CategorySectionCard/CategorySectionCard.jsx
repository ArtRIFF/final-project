import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./CategorySectionCard.scss";

const CategorySectionCard = (props) => {
  const { product } = props;
  const { name, price, url, alt, oldPrice, sale, bestseller, newProduct } =
    product;

  return (
    <div className="category-card">
      {sale === "true" && <div className="category-card__sale">sale</div>}
      {bestseller === "true" && (
        <div className="category-card__bestseller">bestseller</div>
      )}
      {newProduct === "true" && <div className="category-card__new">new</div>}
      <img className="category-card__image" src={url} alt={alt} />
      <div className="category-card__content">
        <h5 className="category-card__content-title">{name}</h5>
        <div className="category-card__content-price">
          {oldPrice !== "false" && (
            <p className="category-card__content-price__old-price">
              {oldPrice}
            </p>
          )}
          <h5 className="category-card__content-price__new-price">{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default CategorySectionCard;
