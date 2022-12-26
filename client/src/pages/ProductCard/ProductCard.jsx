import React, { useEffect, createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper";
import { getOneCard, getComments } from "../../helpers/sendRequest";
import ProductPrice from "./ProductPrice";
import AdditionalProducts from "./AdditionalProducts";
import ProductReview from "./ProductRewier";
import {
  setInCart,
  changeCart,
  setInFavorite,
  removeFromFavorite,
} from "../../store/actions";
import { selectInCart, selectInFavorite } from "../../store/selectors";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./ProductCard.scss";
import ModalWindow from "../../components/ModalWindow";
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";

export const CardContext = createContext();

const ProductCard = (props) => {
  const { modalActive, setModalActive, setModalText } = props;
  const [oneCard, setCard] = useState({});
  const [aciveThumb, setAciveThumb] = useState();
  const [comments, setComments] = useState([]);
  let [selectedSize, setSelectedSize] = useState(false);
  const { cardID } = useParams();
  const dispatch = useDispatch();
  const inCart = useSelector(selectInCart);
  const inFavoriteStore = useSelector(selectInFavorite);

  useEffect(() => {
    getOneCard(cardID).then((data) => {
      setCard(data);
    });
  }, [cardID]);
  useEffect(() => {
    getComments().then((data) => setComments(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("inCart", JSON.stringify(inCart));
  }, [inCart]);
  useEffect(() => {
    localStorage.setItem("inFavorite", JSON.stringify(inFavoriteStore));
  }, [inFavoriteStore]);

  const {
    name,
    currentPrice,
    imageUrls,
    productDescription,
    metal,
    metalColor,
    collectionName,
    insertType,
    insertNumber,
    averageWeight,
    categories,
    discount,
    sample,
    shipping,
    condition,
    statusProduct,
    length,
    itemNo,
    article,
    size,
  } = oneCard;

  const oldPrice = (currentPrice, discount) => {
    const discountPrice = (currentPrice / 100) * discount;
    return currentPrice - discountPrice;
  };

  const handleChange = (e) => setSelectedSize(e.target.value);

  const addToCart = (cardID) => {
    if (selectedSize === false || selectedSize === "not choose") {
      setModalActive(true);
      setModalText("Choose size");
    } else {
      if (inCart.length > 0) {
        inCart.forEach((item) => {
          if (item.cardID === cardID && item.size === selectedSize) {
            let newCart =[]
            inCart.forEach(i => {newCart.push({...i})});
            const elem = newCart.find(elem => elem.cardID === item.cardID);
            elem.quantity += 1;
            dispatch(changeCart(newCart));
          } else {
            dispatch(
              setInCart({ cardID: cardID, quantity: 1, size: selectedSize,price: currentPrice, })
            );
          }
        });
      } else {
        dispatch(
          setInCart({ cardID: cardID, quantity: 1, size: selectedSize,price: currentPrice, })
        );
      }
    }
  };

  const addRemoveFavorite = (cardId) => {
    if (inFavoriteStore.includes(cardId)) {
      let newFavorite = inFavoriteStore.filter((id) => id !== cardId);
      dispatch(removeFromFavorite(newFavorite));
    } else {
      dispatch(setInFavorite(cardId));
    }
  };

  const productComments = comments.filter(
    (comment) => comment.product.itemNo === cardID
  );

  const productRating = () => {
    if (productComments.length === 0) {
      return 0;
    } else {
      return (
        productComments.reduce((acc, cur) => acc + cur.rating * 1, 0) /
        productComments.length
      );
    }
  };

  return (
    <CardContext.Provider value={{ oneCard, productComments }}>
      <div className="container">
        <div className="card-breadcrumbs">
        <Breadcrumbs />
        </div>
        <div className="product-card">
          <div className="product-card__main">
            <div className="product-card__main-images">
              <Swiper
                modules={[Navigation, EffectFade, Thumbs]}
                navigation
                effect
                speed={900}
                slidesPerView={1}
                loop
                className="product-card-photo-slider"
                grabCursor={true}
                spaceBetween={10}
                thumbs={{ swiper: aciveThumb }}
              >
                {imageUrls !== undefined &&
                  imageUrls.map((photo) => {
                    return (
                      <SwiperSlide key={article}>
                        <img src={`../${photo}`} alt={name}></img>
                        {discount > 0 && (
                          <div className="category-card__sale product-card-sale">
                            sale
                          </div>
                        )}
                        {statusProduct === "BESTSELLER" && (
                          <div className="category-card__bestseller product-card-bestseller">
                            bestseller
                          </div>
                        )}
                        {statusProduct === "NEW" && (
                          <div className="category-card__new product-card-new">
                            new
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <Swiper
                onSwiper={setAciveThumb}
                modules={[EffectFade, Thumbs]}
                navigation
                effect
                speed={900}
                slidesPerView={4}
                loop
                className="product-card-photo-slider-thumbs"
                spaceBetween={10}
              >
                <div className="product-card-photo-slider-thumbs-wrapper">
                  {imageUrls !== undefined &&
                    imageUrls.map((photo) => {
                      return (
                        <SwiperSlide key={itemNo}>
                          <img src={`../${photo}`} alt={name}></img>
                        </SwiperSlide>
                      );
                    })}
                </div>
              </Swiper>
            </div>

            <ProductPrice
              name={name}
              size={size}
              oldPrice={oldPrice(currentPrice, discount)}
              price={currentPrice}
              addToCart={addToCart}
              cardID={cardID}
              addRemoveFavorite={addRemoveFavorite}
              rating={productRating()}
              handleChange={handleChange}
            />
            <div className="product-card__main-description">
              <h5 className="product-card__main-description__subtitle">
                About {categories}
              </h5>
              <p className="product-card__main-description__details">
                Material: {metal} {sample}
                <br />
                Metal color: {metalColor} <br />
                Collection: {collectionName} <br />
                Insert: {insertType}
                <br />
                Average insert characteristics: {insertNumber}
                <br />
                Average weight: {averageWeight}
                <br />
                Length {categories}: {length}
              </p>

              <h5 className="product-card__main-description__subtitle">
                {name !== undefined && name[0].toUpperCase() + name.slice(1)}
              </h5>
              <p className="product-card__main-description__details">
                {productDescription}
              </p>
              <h5 className="product-card__main-description__subtitle">
                Delivery
              </h5>
              <p className="product-card__main-description__details">
                Nova Poshta (branch): {shipping} <br />
                By courier (in Ukraine) {shipping} <br />
                Self-pickup from the store: In any of the network's 37 stores
                Booking for 3 days <br /> Moving to the store up to 4 days.
                <br />
                Delivery time 2-4 days
              </p>
              <h5 className="product-card__main-description__subtitle">
                Payment
              </h5>
              <p className="product-card__main-description__details">
                Cash on receipt <br />
                VISA / Mastercard (LIQPAY)
                <br />
                Instant installments
              </p>
            </div>
          </div>

          <AdditionalProducts
            collection={statusProduct}
            title={"similar cards"}
            sectionTitle="Similar"
          />
          <section className="product-card__review">
            <h2 className="product-card__review-title">Review</h2>
            <div className="product-card__main-additionally">
              <ProductReview />
              <ProductPrice
                name={name}
                size={size}
                oldPrice={oldPrice(currentPrice, discount)}
                price={currentPrice}
                cardID={cardID}
                addToCart={addToCart}
                addRemoveFavorite={addRemoveFavorite}
                rating={productRating()}
                handleChange={handleChange}
              />
            </div>
          </section>
          <AdditionalProducts
            cards={"popular cards"}
            title={"popular cards"}
            sectionTitle="Popular"
          />
        </div>
      </div>
    </CardContext.Provider>
  );
};
export default ProductCard;
