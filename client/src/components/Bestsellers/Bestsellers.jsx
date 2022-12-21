import React, { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ButtonViewAll from "../Button/ViewAll/ViewAll";
import CategorySectionCard from "../CatalogSection/CategorySectionCard";
import { selectBestsellers } from "../../store/selectors";
import { fetchBestsellers } from "../../store/actions";
import { Link, useParams } from "react-router-dom";
import { getCards } from "../../helpers/sendRequest";

import "./bestsellers.scss";

const Bestsellers = (props) => {
  const dispatch = useDispatch();
  const bestsellers = useSelector(selectBestsellers);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    dispatch(fetchBestsellers());
  }, []);
  const numberOfItems = viewAll ? bestsellers.length : 4;
  console.log(bestsellers);
  return (
    <section className="bestsellers">
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">Bestsellers</h2>
        <Link to={"/viewAllBestsellers"}>
          <ButtonViewAll />
        </Link>
      </div>
      <div className="bestsellers__cards-container">
        {bestsellers.slice(0, numberOfItems).map((card, index) => {
          return (
            <Link to={`products/${card.itemNo}`}>
              <CategorySectionCard key={index++} product={card} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bestsellers;
