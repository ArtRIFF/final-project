import React from "react";

import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./CollectionSectionCard.scss";
import ButtonAll from "../../Button/BattonAll/ButtonAll";
import ProductCard from "../../../pages/ProductCard/ProductCard";
import { Link, useParams } from "react-router-dom";

const CollectionSectionCard = (props) => {
  const { product } = props;
  const { name, currentPrice, imageUrls, subtitle, itemNo } = product;

  return (
    <div className="collection-section-card">
      {imageUrls.map((el) => {
        return (
          <img className="collection-section-card__image" src={el} alt={name} />
        );
      })}
      <div className="collection-section-card__content">
        <h5 className="collection-section-card__content-title">{name}</h5>
        <p className="collection-section-card__content-subtitle">{subtitle}</p>
        <h5 className="collection-section-card__content-price">
          ${currentPrice}
        </h5>

        <Link to={`products/${itemNo}`}>
          <ButtonAll text="See More" className="section__btn-collection" />
        </Link>
      </div>
    </div>
  );
};

export default CollectionSectionCard;
