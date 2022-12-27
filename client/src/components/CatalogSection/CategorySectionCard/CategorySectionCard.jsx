import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./CategorySectionCard.scss";

const CategorySectionCard = (props) => {
  const { product } = props;
  const {
    name,
    currentPrice,
    collectionName,
    discount,
    statusProduct,
    imageUrls,
    itemNo,
  } = product;

  const oldPrice = (currentPrice, discount) => {
    const discountPrice = (currentPrice / 100) * discount;
    return currentPrice + discountPrice;
  };

  return (
    <Link to={`/products/${itemNo}`} replace>
      <div className="category-card">
        {discount > 0 && <div className="category-card__sale">sale</div>}
        {statusProduct === "BESTSELLER" && (
          <div className="category-card__bestseller">bestseller</div>
        )}
        {statusProduct === "NEW" && (
          <div className="category-card__new">new</div>
        )}
        <img className="category-card__image" src={imageUrls[0]} alt={name} />

        <div className="category-card__content">
          <h5 className="category-card__content-title">{name}</h5>
          <div className="category-card__content-price">
            {discount > 0 && (
              <p className="category-card__content-price__old-price">
                &#8372; {oldPrice(currentPrice, discount)}
              </p>
            )}
            <h5 className="category-card__content-price__new-price">
              &#8372; {currentPrice}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategorySectionCard;
