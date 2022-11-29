import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper";
import { sendRequest, getOneCards } from "../../helpers/sendRequest";
import ProductPrice from "./ProductPrice";
import AdditionalProducts from "./AdditionalProducts";
import ProductRewier from "./ProductRewier";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./ProductCard.scss";

const ProductCard = () => {
  const [oneCard, setCard] = useState({});
  const [aciveThumb, setAciveThumb] = useState();
  const { cardID } = useParams();

  useEffect(() => {
    getOneCards(cardID).then((data) => {
      setCard(data);
    });
  }, [cardID]);

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
  } = oneCard;
  const additionalPhotos = [
    "/img/productCard/Rectangle42.jpg",
    "/img/productCard/Rectangle43.jpg",
    "/img/productCard/Rectangle44.jpg",
    "/img/productCard/Rectangle45.jpg",
  ];
  const oldPrice = (currentPrice, discount) => {
    const discountPrice = (currentPrice / 100) * discount;
    return currentPrice - discountPrice;
  };
  console.log(imageUrls);

  return (
    <>
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
                {additionalPhotos.map((photo) => {
                  return (
                    <SwiperSlide>
                      <img src={photo} alt={name}></img>
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
                      {collectionName === "NEW" && (
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
                  {additionalPhotos.map((photo) => {
                    return (
                      <SwiperSlide>
                        <img src={photo} alt={name}></img>
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
                {/* {categories[0].toUpperCase() + categories.slice(1)} {name} */}
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
              <ProductRewier />
              <ProductPrice
                name={name}
                oldPrice={oldPrice(currentPrice, discount)}
                price={currentPrice}
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
    </>
  );
};
export default ProductCard;
