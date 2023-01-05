import CollectionSectionCard from "../../../../CollectionSection/CollectionSectionCard";
import { useDispatch,useSelector } from "react-redux";
import { selectorAllCollectionProduct } from "../../../../../store/selectors";
import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../../../../pages/CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";

import "./SearchPage.scss";


const SearchPage = () => {
    const AllCollectionProduct = useSelector(selectorAllCollectionProduct);
    const [viewAll, setViewAll] = useState(false);

  const numberOfItems = viewAll ? AllCollectionProduct.length : 12;
    return (
        <div className="result container">
        <div className="result__breadcrumbs">
        <Breadcrumbs/>
        </div>
            {AllCollectionProduct.slice(0, numberOfItems).map((card, index) => {
          return (
            <div key={index} className="result__search">
            {/* // <Link key={index} to={`products/${card.itemNo}`}> */}
              <CollectionSectionCard product={card} className="result__card"/>
            {/* // </Link> */}
            </div>
          );
          })}
        </div>
    )
}

export default SearchPage;