import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ButtonViewAll from "../Button/ViewAll/ViewAll";
import CategorySectionCard from "../CatalogSection/CategorySectionCard";
import { selectOutlet } from "../../store/selectors";
import { fetchOutlet } from "../../store/products/productsSlice";

import "./outlet.scss";

const Outlet = (props) => {
  const dispatch = useDispatch();
  const outlet = useSelector(selectOutlet);

  useEffect(() => {
    dispatch(fetchOutlet());
  }, []);

  const numberOfItems = () => {
    if (window.screen.width > 768) {
      return 4;
    } else if (window.screen.width <= 768 && window.screen.width >= 481) {
      return 3;
    } else if (window.screen.width < 480) {
      return 2;
    }
  };
  return (
    <section className="outlet">
      <div className="container">
        <div className="outlet__header">
          <h2 className="outlet__title">Outlet</h2>
          <Link
            to={"/jewelry?statusProduct=OUTLET&perPage=12&startPage=1"}
            className="btn__outlet"
          >
            <ButtonViewAll />
          </Link>
        </div>
        <div className="outlet__cards-container">
          {outlet.slice(0, numberOfItems()).map((card, index) => {
            return <CategorySectionCard product={card} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Outlet;
