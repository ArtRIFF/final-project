import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./CollectionSectionCard.scss";
import ButtonCollection from "../../Button/ButtonCollection/ButtonCollection";

const CollectionSectionCard = (props) => {
  const { product } = props;
  const { name, price, url, subtitle } = product;

  return (
    <div className="collection-section-card">
      <img
        className="collection-section-card__image"
        src={url}
        alt="new-collection"
      />
      <div className="collection-section-card__content">
        <h5 className="collection-section-card__content-title">{name}</h5>
        <p className="collection-section-card__content-subtitle">{subtitle}</p>
        <h5 className="collection-section-card__content-price">{price}</h5>

        <ButtonCollection />
      </div>
    </div>
  );
};

export default CollectionSectionCard;
