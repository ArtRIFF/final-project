import React from "react";

import PropTypes from "prop-types";
import "./CollectionSectionCard.scss";
import ButtonAll from "../../Button/ButtonAll/ButtonAll";
import { Link } from "react-router-dom";

const CollectionSectionCard = (props) => {
  const { product } = props;
  const { name, currentPrice, imageUrls, subtitle, itemNo } = product;

  return (
    <div className="collection-section-card">
      <img
        className="collection-section-card__image"
        src={imageUrls[0]}
        alt={name}
      />
      <div className="collection-section-card__content">
        <h5 className="collection-section-card__content-title">{name}</h5>
        <p className="collection-section-card__content-subtitle">{subtitle}</p>
        <h5 className="collection-section-card__content-price">
          &#8372; {currentPrice}
        </h5>
        <Link to={`/products/${itemNo}`} replace>
          <ButtonAll text="See More" className="section__btn-collection" />
        </Link>
      </div>
    </div>
  );
};

export default CollectionSectionCard;
