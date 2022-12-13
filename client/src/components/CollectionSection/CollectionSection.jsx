import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CollectionSectionCard from "./CollectionSectionCard";
import { selectorNewCollectionProduct } from "../../store/selectors";
import { fetchNewCollectionProduct } from "../../store/actions";
import "./CollectionSection.scss";
import ButtonViewAll from "../Button/ViewAll/ViewAll";
import CatalogSectionPage from "../../pages/CatalogSectionPage/CatalogSectionPage";
import Footer from "../Footer/Footer";

const CollectionSection = (props) => {
  const dispatch = useDispatch();
  const [viewAll, setViewAll] = useState(false);
  const newCollectionArray = useSelector(selectorNewCollectionProduct);

  useEffect(() => {
    dispatch(fetchNewCollectionProduct());
  }, []);

  const numberOfItems = viewAll ? newCollectionArray.length : 4;
  return (
    <div className="collection-section">
      <div className="container">
        <div className="collection-section__header">
          <h2 className="collection-section__header_title">New Collection</h2>
          <Link to={"/viewAllNewCollection"}>
            <ButtonViewAll />
          </Link>
        </div>
        <div className="collection-section__content">
          {newCollectionArray.slice(0, numberOfItems).map((card, index) => {
            return <CollectionSectionCard product={card} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
