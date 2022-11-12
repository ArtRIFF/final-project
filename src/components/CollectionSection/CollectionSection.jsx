import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import CollectionSectionCard from "./CollectionSectionCard";
import ButtonViewAll from "../Button/ViewAll/ViewAll";
import { selectorNewCollectionProduct } from "../../store/selectors";
import { fetchNewCollectionProduct } from "../../store/actions";
import "./CollectionSection.scss";

const CollectionSection = (props) => {
  const dispatch = useDispatch();
  const newCollectionArray = useSelector(selectorNewCollectionProduct);

  useEffect(() => {
    dispatch(fetchNewCollectionProduct());
  }, []);

  return (
    <div className="collection-section">
      <div className="collection-section__header">
        <h2 className="collection-section__header_title">New Collection</h2>
        <ButtonViewAll/>
        {/* <p className="collection-section__header_all">Viev All</p> */}
      </div>
      <div className="collection-section__content">
        {newCollectionArray.map((card, index) => {
          return <CollectionSectionCard product={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CollectionSection;
