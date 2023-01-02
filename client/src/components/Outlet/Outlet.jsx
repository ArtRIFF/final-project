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

  const numberOfItems = () => {
    if (viewAll) {
      return outlet.length;
    } else {
      if (window.screen.width >= 767) {
        return 8;
      } else if (window.screen.width < 767 && window.screen.width >= 481) {
        return 3;
      } else if (window.screen.width < 480) {
        return 2;
      }
    }
  };
  return (
    <section className="outlet">
      <div className="container">
        <div className="outlet__header">
          <h2 className="outlet__title">Outlet</h2>

          <Link to={"/Outlet"} className="btn__outlet">
            <ButtonViewAll />
          </Link>
        </div>
        <div className="outlet__cards-container">
          {outlet.slice(0, numberOfItems()).map((card, index) => {
            return (
              <div key={index}>
                <CategorySectionCard product={card} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Outlet;
