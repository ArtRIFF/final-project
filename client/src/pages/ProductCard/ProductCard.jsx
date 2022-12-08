import React, { useEffect, createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper";
import { getOneCard, getComments } from "../../helpers/sendRequest";
import ProductPrice from "./ProductPrice";
import AdditionalProducts from "./AdditionalProducts";
import ProductReview from "./ProductRewier";
import { setInCart, removeFromCart, setInFavorite, removeFromFavorite } from "../../store/actions";
import { selectInCart, selectInFavorite } from "../../store/selectors";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./ProductCard.scss";

export const CardContext = createContext();

const ProductCard = () => {
  const [oneCard, setCard] = useState({});
  const [aciveThumb, setAciveThumb] = useState();
  const [comments, setComments] = useState([])
  const { cardID } = useParams();
  const dispatch = useDispatch();
  const inCart = useSelector(selectInCart);
  const inFavoriteStore = useSelector (selectInFavorite);

  useEffect(() => {
    getOneCard(cardID).then((data) => {
      setCard(data);
    });
  }, [cardID]);
  useEffect(()=>{
    getComments().then(data => setComments(data))
  }, [])
  useEffect(() => {
    localStorage.setItem("inCart", JSON.stringify(inCart))
  },[inCart]);
  useEffect(() => {    
    localStorage.setItem("inFavorite", JSON.stringify(inFavoriteStore));
  },[inFavoriteStore]);

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
    content,
    rating,
    itemNo
  } = oneCard;
  
  const oldPrice = (currentPrice, discount) => {
    const discountPrice = (currentPrice / 100) * discount;
    return currentPrice - discountPrice;
  };

  const addToCart = (cardID,size=17) => {
    if (inCart.length > 0) {
      (inCart.forEach(item => {
        if (item.cardID === cardID && item.size === size) {
          let newCart = [...inCart];
          console.log ('new cart before removing', newCart);
          const index = inCart.indexOf(item);
          console.log('index of the product in cart', index)
            if (index > -1) { 
                newCart.splice(index, 1);
                console.log ('new cart', newCart)   
              }
              dispatch(removeFromCart(newCart));
          dispatch(setInCart({cardID: cardID, quantity: item.quantity+1, size: size}))
        } else {dispatch(setInCart({cardID: cardID, quantity: 1, size: size}))}
      } 
      ))
    } else {
      dispatch(setInCart({cardID: cardID, quantity: 1, size: size}))
    } 
  } 
  
  const addRemoveFavorite = (cardId) => {
      if (inFavoriteStore.includes(cardId)){ 
          let newFavorite = inFavoriteStore.filter(id => id !== cardId);
          dispatch(removeFromFavorite(newFavorite))
      } else {
          dispatch(setInFavorite(cardId))
          }
    }   
  // console.log('Cart', inCart);

  const productComments = comments.filter(comment => comment.product.itemNo === cardID);
  
  const productRating = () => {
    if (productComments.length === 0) {return 0}
    else if (productComments.length === 1) {return +productComments[0].rating}
    {
      let firstComment = productComments[0];
      let firstRating = +firstComment.rating;
      // інакше не може редьюс зробити, перший рейтинг не бачить
      return (productComments.reduce((acc, cur) => acc + cur.rating*1, firstRating)-firstRating)/productComments.length
    }
  }

  return (
    <CardContext.Provider value={{oneCard, productComments}}>
      <div className="container">
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
                      <SwiperSlide>
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
                      console.log(photo);
                      return (
                        <SwiperSlide>
                          <img src={`../${photo}`} alt={name}></img>
                        </SwiperSlide>
                      );
                    })}
                </div>
              </Swiper>
            </div>

            <ProductPrice
              name={name}
              oldPrice={oldPrice(currentPrice, discount)}
              price={currentPrice}
              addToCart={addToCart}
              cardID={cardID}
              addRemoveFavorite={addRemoveFavorite}
              rating={productRating()}
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
            cards={"similar cards"}
            title={"similar cards"}
            sectionTitle="Similar"
          />
          <section className="product-card__review">
            <h2 className="product-card__review-title">Review</h2>
            <div className="product-card__main-additionally">
              <ProductReview />
              <ProductPrice
                name={name}
                oldPrice={oldPrice(currentPrice, discount)}
                price={currentPrice}
                cardID={cardID}
                addToCart={addToCart}
                addRemoveFavorite={addRemoveFavorite}
                rating={productRating()}
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
