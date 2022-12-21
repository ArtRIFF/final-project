import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonViewAll from "../../../components/Button/ViewAll/ViewAll";
import CategorySectionCard from "../../../components/CatalogSection/CategorySectionCard";
import { selectBestsellers } from "../../../store/selectors";
import { fetchBestsellers } from "../../../store/actions";

import "./additionalProducts.scss";

const AdditionalProducts = (props) => {
  const dispatch = useDispatch();
  const bestsellers = useSelector(selectBestsellers);
  const sectionTitle = props.sectionTitle;
  useEffect(() => {
    dispatch(fetchBestsellers());
  }, []);

  return (
    <section className="bestsellers">
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">{sectionTitle}</h2>
        <ButtonViewAll />
      </div>
      <div className="bestsellers__cards-container">
        {bestsellers.slice(0, 4).map((card, index) => {
          return <CategorySectionCard key={index} product={card} />;
        })}
      </div>
    </section>
  );
};

export default AdditionalProducts;