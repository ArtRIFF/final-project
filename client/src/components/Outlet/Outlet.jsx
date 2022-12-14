import React, { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ButtonViewAll from "../Button/ViewAll/ViewAll";
import CategorySectionCard from "../CatalogSection/CategorySectionCard";
import { selectOutlet } from "../../store/selectors";
import { fetchOutlet } from "../../store/actions";

import "./outlet.scss";

const Outlet = (props) => {
  const dispatch = useDispatch();
  const outlet = useSelector(selectOutlet);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    dispatch(fetchOutlet());
  }, []);

  const numberOfItems = viewAll ? outlet.length : 8;
  return (
    <section className="outlet">
      <div className="outlet__header">
        <h2 className="outlet__title">Outlet</h2>

        <Link to={"/Outlet"}>
          <ButtonViewAll />
        </Link>
      </div>
      <div className="outlet__cards-container">
        {outlet.slice(0, numberOfItems).map((card, index) => {
          return (
            <Link to={`products/${card.itemNo}`}>
              <CategorySectionCard key={index} product={card} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Outlet;
