import React from "react";
import ProductRating from "../ProductRating";

const ProductReviewItem = ({rating, content, name}) => {
  
    return (
          <div className="product-review__item">
            <div className="product-review__item_header">
              <div className="product-review__item_rating">
                <ProductRating value={+rating}/>
                <p className="reviewer-name">{name}</p>
              </div>
              <p className="product-review__item_date">11.10.21</p>
            </div>
            <div className="product-review__item_content">
              {content}
            </div>
          </div>
    )}

 export default ProductReviewItem