import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductRating from "../ProductRating";
import { ReactComponent as Diamond } from "./img/diamond.svg";
import { ReactComponent as Box } from "./img/box.svg";
import { selectInFavorite } from "../../../store/selectors";
import ButtonAll from "../../../components/Button/ButtonAll/ButtonAll";
import "./ProductPrice.scss";

const ProductPrice = (props) => {
  const {
    name,
    oldPrice,
    price,
    addToCart,
    addRemoveFavorite,
    handleChange,
    cardID,
    rating,
    size,
    selectedSize,
    _id,
  } = props;

  const inFavoriteStore = useSelector(selectInFavorite);
  const changeIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (inFavoriteStore.includes(_id)) {
      setIsFavorite(true);
    }
  }, [_id]);
  const buyNow = () => {
    if (selectedSize === false || selectedSize === "not choose") {
      return "";
    } else {
      return "/cart";
    }
  };

  return (
    <div className="product-card__price">
      <div className="product-card__price__header">
        <div className="product-card__price__header__rewiews">
          <ProductRating value={rating} />
        </div>
        <h3 className="product-card__price__header-title">
          {name?.toUpperCase()}
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
          <select
            name="product-size"
            required="required"
            onChange={handleChange}
          >
            <option value="not choose"></option>
            {size?.split(",").map((el, index) => {
              return (
                <option key={index} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          <div className="select-arrow"></div>
        </div>
      </div>
      <div className="product-card__price__buttons">
        <div onClick={() => addToCart(cardID)}>
          <ButtonAll className={"section__btn-header"} text={"Add to cart"} />
        </div>
        <Link onClick={() => addToCart(cardID)} to={buyNow()}>
          <ButtonAll
            className={"section__btn-header white-button"}
            text={"Buy it now"}
          />
        </Link>
        <div
          onClick={() => {
            addRemoveFavorite(_id);
            changeIsFavorite(_id);
          }}
        >
          <ButtonAll
            className={
              isFavorite
                ? "section__btn-header white-button white-button-favorite-select"
                : "section__btn-header white-button white-button-favorite"
            }
            text={""}
          />
        </div>
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
