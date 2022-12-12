import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import classNames from "classnames";
import CategorySectionCard from "./CategorySectionCard";
import { selectorAllCollectionProduct } from "../../store/selectors";
import { fetchAllCollectionProduct } from "../../store/actions";
import "./CategorySection.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";

const CategorySection = (props) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(false);

  const classes = classNames("category__content-sidebar__link", {
    active: activeTab,
  });
  const productArray = useSelector(selectorAllCollectionProduct);
  const earringsArray = productArray.filter(
    (element) =>
      element.categories === "earring" ||
      element.categories === "child-earrings"
  );
  const braceletsArray = productArray.filter(
    (element) => element.categories === "bracelet"
  );
  const pendantArray = productArray.filter(
    (element) => element.categories === "pendant"
  );
  const ringsArray = productArray.filter(
    (element) =>
      element.categories === "engagement-ring" ||
      element.categories === "wedding-ring"
  );
  const pearlArray = productArray.filter(
    (element) => element.categories === "pearl"
  );
  const crossArray = productArray.filter(
    (element) => element.categories === "cross"
  );
  const [selectArr, setSelectArr] = useState(braceletsArray);

  useEffect(() => {
    dispatch(fetchAllCollectionProduct());
    setSelectArr(braceletsArray);
  }, []);

  useEffect(() => {
    setSelectArr(braceletsArray);
  }, [productArray]);

  console.log(selectArr);
  console.log(activeTab);
  return (
    <div className="category">
      <h2 className="category__title">Shop by Category</h2>
      <div className="category__content">
        <div className="category__content-sidebar">
          <p
            className={classes}
            onClick={(e) => {
              setSelectArr(braceletsArray);
            }}
          >
            Bracelets
          </p>
          <p
            className={classes}
            onClick={() => {
              setSelectArr(pendantArray);
            }}
          >
            Pendant
          </p>
          <p
            className={classes}
            onClick={() => {
              setSelectArr(ringsArray);
            }}
          >
            Rings
          </p>
          <p
            className={classes}
            onClick={() => {
              setSelectArr(earringsArray);
            }}
          >
            Earrings
          </p>
          <p
            className={classes}
            onClick={() => {
              setSelectArr(pearlArray);
            }}
          >
            Pearl
          </p>
          <p
            className={classes}
            onClick={() => {
              setSelectArr(crossArray);
            }}
          >
            Cross
          </p>
        </div>
        <div>
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={900}
            slidesPerView={window.innerWidth <= 552 ? 1 : 3}
            loop
            className="category__content-cards"
          >
            {selectArr.slice(0, 4).map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <CategorySectionCard product={card} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
