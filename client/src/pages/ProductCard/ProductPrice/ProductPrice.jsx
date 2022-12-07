import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ProductRating from "../ProductRating";
import { ReactComponent as Diamond } from "./img/diamond.svg";
import { ReactComponent as Box } from "./img/box.svg";
import { selectInFavorite } from "../../../store/selectors";
import ButtonAll from "../../../components/Button/BattonAll/ButtonAll";
import "./ProductPrice.scss";

const ProductPrice = (props) => {
  const { name, oldPrice, price, addToCart, addRemoveFavorite, oneCard, rating } = props;
  
  const dispatch = useDispatch();
  const inFavoriteStore = useSelector (selectInFavorite);
  const changeIsFavorite = () => {
    setIsFavorite(!isFavorite);
    // console.log('isFavorite',isFavorite)
}
// console.log('onecard',oneCard)

const [isFavorite, setIsFavorite] = useState(false);
useEffect(() => {
    if (inFavoriteStore.includes(oneCard)) {
      // if (inFavoriteStore.includes(oneCard.itemNo)) {  
      setIsFavorite(true)
    } 
    // console.log('isFavorite',isFavorite)
},[])

  
  return (
    <div className="product-card__price">
      <div className="product-card__price__header">
        <div className="product-card__price__header__rewiews">
          <ProductRating value={rating}/>
        </div>
        <h3 className="product-card__price__header-title">
          {name !== undefined && name.toUpperCase()}
        </h3>
      </div>
      <div className="product-card__price__body">
        <div className="product-card__price__body__cost">
          <p className="product-card__price__body__cost-old-price">
            &#8372; {oldPrice}
          </p>
          <p className="product-card__price__body__cost-new-price">
            &#8372; {price}
          </p>

        </div>
        <div className="product-card__price__body__selector">
          <select name="product-size" required="required">
            <option value="1">14</option>
            <option value="2">14.5</option>
            <option value="3">15</option>
            <option value="1">15.5</option>
            <option value="2">16</option>
            <option value="3">16.5</option>
            <option value="4">17</option>
            <option value="5">17.5</option>
            <option value="6">18</option>
          </select>
          <div className="select-arrow"></div>
        </div>
      </div>
      <div className="product-card__price__buttons">
        <div onClick={()=>addToCart(oneCard)}><ButtonAll className={"section__btn-header"} text={"Add to cart"} /></div>
        <ButtonAll
          className={"section__btn-header white-button"}
          text={"Buy it now"}
        />
        <div onClick={()=>{addRemoveFavorite(oneCard.cardID);changeIsFavorite(oneCard.cardID)}}><ButtonAll
          className={isFavorite? "section__btn-header white-button white-button-favorite-select":"section__btn-header white-button white-button-favorite"}
          text={""}
        /></div>
      </div>
      <div className="product-card__price__footer">
        <p className="product-card__main-description__details">
          The collaboration with the fashion brand LITKOVSKAYA includes
          jewelry-transformers made of yellow gold with malachite and diamonds.
          The motto of this collection continues the internal slogan of
          LITKOVSKAYA: there is no wrong side.
        </p>
        <div className="product-card__price__footer__additionally">
          <Box className="product-card__price__footer__additionally-icon" />
          Free delivery
        </div>
        <div className="product-card__price__footer__additionally">
          <Diamond className="product-card__price__footer__additionally-icon" />
          Product care
        </div>
      </div>
    </div>
  );
};
export default ProductPrice;
