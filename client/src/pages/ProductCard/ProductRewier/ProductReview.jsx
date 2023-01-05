import React, { useContext } from "react";
import ProductReviewItem from "./ProductReviewItem";
import { CardContext } from "../ProductCard";

import './productReview.scss'


const ProductReview = () => {
  const {productComments} = useContext(CardContext);
  
  let value = true;
  if (productComments.length === 0) { value = false }

  return (
      <section className="product-review">
        {!value && <p className="product-review__item_content">No one reviewed this product yet</p>}
        {value && productComments.map((comment, index) => {
          return (<ProductReviewItem 
            key = {index} 
            rating = {comment.rating} 
            content = {comment.content} 
            name = {comment.name}/>)}
        )}
      
      </section>
    );
};
export default ProductReview;
