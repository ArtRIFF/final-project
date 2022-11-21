import React, { useEffect, useContext } from "react";
import ProductRating from "../ProductRating";

import './productReview.scss'

const ProductRewier = () => {
  return (
    <>
      <section className="product-review">
        <div className="product-review__item">
          <div className="product-review__item_header">
            <div className="product-review__item_rating">
              <ProductRating/>
              <p className="reviewer-name">Liza</p>
            </div>
            <p className="product-review__item_date">11.10.21</p>
          </div>
          <div className="product-review__item_content">
            The overall impressions are only positive. Very quiet, good spin, clean linen without streaks. So the residues of grease and other odors after the plant go away. Your guys delivered the ring almost on time without dents and other things
          </div>
        </div>
        <div className="product-review__item">
          <div className="product-review__item_header">
            <div className="product-review__item_rating">
              <ProductRating/>
              <p className="reviewer-name">Bill</p>
            </div>
            <p className="product-review__item_date">11.10.21</p>
          </div>
          <div className="product-review__item_content">
          Friendly sales person , patient with all my questions. Very accommodating and understanding for the challenges getting to the bank due to the pandemic
          </div>
        </div>
        <div className="product-review__item">
          <div className="product-review__item_header">
            <div className="product-review__item_rating">
              <ProductRating/>
              <p className="reviewer-name">John</p>
            </div>
            <p className="product-review__item_date">11.10.21</p>
          </div>
          <div className="product-review__item_content">
          They were very helpful explaining the purchase process. When I picked up my watch I was blown away. It's 4 years old but talk about mint . Just as good as buying new
          </div>
        </div>
      </section>
    </>
    );
};
export default ProductRewier;
