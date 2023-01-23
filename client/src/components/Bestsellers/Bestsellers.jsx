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
  const numberOfItems = () => {
    if (viewAll) {
      return bestsellers.length;
    } else {
      if (window.screen.width > 768) {
        return 4;
      } else if (window.screen.width <= 768 && window.screen.width >= 481) {
        return 3;
      } else if (window.screen.width < 480) {
        return 2;
      }
    }
  };

  return (
    <section className="bestsellers">
      <div className="container">
        <div className="bestsellers__header">
          <h2 className="bestsellers__title">Bestsellers</h2>
          <Link to={"/Bestsellers"} className="btn__bestsellers">
            <ButtonViewAll />
          </Link>
        </div>
        <div className="bestsellers__cards-container">
          {bestsellers.slice(0, numberOfItems()).map((card, index) => {
            return <CategorySectionCard product={card} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
