import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import PropTypes from "prop-types";
import CategorySectionCard from "./CategorySectionCard";
import { selectorCategoryEarrings } from "../../store/selectors";
import { fetchCategoryEarrings } from "../../store/actions";
import "./CategorySection.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const CategorySection = (props) => {
  const dispatch = useDispatch();
  const earringsArray = useSelector(selectorCategoryEarrings);

  useEffect(() => {
    dispatch(fetchCategoryEarrings());
  }, []);

  return (
    <div className="category">
      <h2 className="category__title">Shop by Category</h2>
      <div className="category__content">
        {/* переробити а на лінки  */}
        <div className="category__content-sidebar">
          <a href="#" className="category__content-sidebar__link">
            Bracelets
          </a>
          <a href="#" className="category__content-sidebar__link active">
            Necklace
          </a>
          <a href="#" className="category__content-sidebar__link">
            Rings
          </a>
          <a href="#" className="category__content-sidebar__link">
            Earrings
          </a>
          <a href="#" className="category__content-sidebar__link">
            Chains
          </a>
          <a href="#" className="category__content-sidebar__link">
            Brooches
          </a>
          <a href="#" className="category__content-sidebar__link">
            Hairpins
          </a>
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
            {earringsArray.map((card, index) => {
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
