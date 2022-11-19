import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper";

import ProductPrice from "./ProductPrice";
import AdditionalProducts from "./AdditionalProducts";
import ProductRewier from "./ProductRewier";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./ProductCard.scss";

const ProductCard = (props) => {

  const [aciveThumb, setAciveThumb] = useState();
  const card = {
    name: "Gold earring with pearl",
    price: "$2,130",
    oldPrice: "$43,880",
    url: "/img/new-collection/jewelry-1.png",
    subtitle:
      "Breeze - a collection of variability. That we adapt to circumstances just as water adapts to wind currents.",
    alt: "earring",
    sale: "true",
    bestseller: "false",
    newProduct: "false",
    stars: "4",
    reviews: "6",
    article: "743874",
    additionalPhotos: [
      "/img/productCard/Rectangle42.jpg",
      "/img/productCard/Rectangle43.jpg",
      "/img/productCard/Rectangle44.jpg",
      "/img/productCard/Rectangle45.jpg",
    ]
  };
  const {
    name,
    price,
    url,
    subtitle,
    alt,
    oldPrice,
    sale,
    bestseller,
    newProduct,
    stars,
    reviews,
    article,
    additionalPhotos
  } = card;

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
                      <img src={photo} alt={alt}></img>
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
                        <img src={photo} alt={alt}></img>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
            <ProductPrice name={name} oldPrice={oldPrice} price={price} />
            <div className="product-card__main-description">
              <h5 className="product-card__main-description__subtitle">
                About Ring
              </h5>
              <p className="product-card__main-description__details">
                Material: Gold 585
                <br />
                Metal color: Yellow <br />
                Collection: LITKOVSKAYA <br />
                Insert: Diamond <br />
                Average insert characteristics: Diamond: 1Kr-57-0,02ct-3 / 5A{" "}
                <br />
                Average weight: 1.39
              </p>
              <h5 className="product-card__main-description__subtitle">
                {name}
              </h5>
              <p className="product-card__main-description__details">
                Yellow gold ring with LITKOVSKAYA diamond, do not depend on time
                and trends, they create their own reality. Combine products with
                each other and with other accessories. Being yourself means
                being unique. Ring made of yellow gold with diamond LITKOVSKAYA.
                Article: 119162620301
              </p>
              <h5 className="product-card__main-description__subtitle">
                Delivery
              </h5>
              <p className="product-card__main-description__details">
                Nova Poshta (branch): UAH 0 <br />
                By courier (in Ukraine) UAH 0 <br />
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
          
          
          <AdditionalProducts cards={"similar cards"} title={"similar cards"} sectionTitle = 'Similar'/>
          <section className="product-card__review">
            <h2 className="product-card__review-title">Review</h2>
            <div className="product-card__main-additionally">
              <ProductRewier />
              <ProductPrice name={name} oldPrice={oldPrice} price={price} />
            </div>
          </section>
          <AdditionalProducts cards={"popular cards"} title={"popular cards"} sectionTitle = 'Popular'/>
        </div>

      </div>
    </>
  );
};
export default ProductCard;
