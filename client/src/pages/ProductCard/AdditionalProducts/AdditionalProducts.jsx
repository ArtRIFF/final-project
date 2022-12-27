import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonViewAll from "../../../components/Button/ViewAll/ViewAll";
import CategorySectionCard from "../../../components/CatalogSection/CategorySectionCard";

import { Link, useParams } from "react-router-dom";

const AdditionalProducts = (props) => {
  const sectionTitle = props.sectionTitle;
  const cardsArray = props.cardsArray;
  const linkViewAll = props.linkViewAll;

  return (
    <section className="bestsellers">
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">{sectionTitle}</h2>
        <Link to={`${linkViewAll}`}>
          <ButtonViewAll />
        </Link>
      </div>
      <div className="bestsellers__cards-container">
        {cardsArray !== undefined &&
          cardsArray.slice(0, 4).map((card, index) => {
            return (
              <CategorySectionCard
                key={index}
                product={card}
                additionalLink={"../"}
              />
            );
          })}
      </div>
    </section>
  );
};

export default AdditionalProducts;
