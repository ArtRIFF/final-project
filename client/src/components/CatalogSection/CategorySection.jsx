import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import classNames from "classnames";
import CategorySectionCard from "./CategorySectionCard";
import { selectorAllCollectionProduct } from "../../store/selectors";
import { fetchAllCollectionProduct } from "../../store/products/productsSlice";
import "./CategorySection.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";

const CategorySection = (props) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("braceletsArray");

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

  return (
    <div className="category">
      <div className="container">
        <div className="category__container">
          <h2 className="category__title">Shop by Category</h2>
          <div className="category__content">
            <div className="category__content-sidebar">
              <p
                className={
                  activeTab === "braceletsArray"
                    ? "category__content-sidebar__link active"
                    : "category__content-sidebar__link"
                }
                onClick={(e) => {
                  setActiveTab("braceletsArray");
                  setSelectArr(braceletsArray);
                }}
              >
                Bracelets
              </p>
              <p
                className={
                  activeTab === "pendantArray"
                    ? "category__content-sidebar__link active"
                    : "category__content-sidebar__link"
                }
                onClick={() => {
                  setActiveTab("pendantArray");
                  setSelectArr(pendantArray);
                }}
              >
                Pendant
              </p>
              <p
                className={
                  activeTab === "ringsArray"
                    ? "category__content-sidebar__link active"
                    : "category__content-sidebar__link"
                }
                onClick={() => {
                  setActiveTab("ringsArray");
                  setSelectArr(ringsArray);
                }}
              >
                Rings
              </p>
              <p
                className={
                  activeTab === "earringsArray"
                    ? "category__content-sidebar__link active"
                    : "category__content-sidebar__link"
                }
                onClick={() => {
                  setActiveTab("earringsArray");
                  setSelectArr(earringsArray);
                }}
              >
                Earrings
              </p>
              <p
                className={
                  activeTab === "pearlArray"
                    ? "category__content-sidebar__link active"
                    : "category__content-sidebar__link"
                }
                onClick={() => {
                  setActiveTab("pearlArray");
                  setSelectArr(pearlArray);
                }}
              >
                Pearl
              </p>
              <p
                className={
                  activeTab === "crossArray"
                    ? "category__content-sidebar__link active"
                    : "category__content-sidebar__link"
                }
                onClick={() => {
                  setActiveTab("crossArray");
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
      </div>
    </div>
  );
};

export default CategorySection;
