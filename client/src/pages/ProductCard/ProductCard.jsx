import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductPrice from "./ProductPrice";
import OtherProduct from "./OtherProduct";
import ProductRewier from "./ProductRewier";
import CollectionSectionCard from "../../components/CollectionSection/CollectionSectionCard/CollectionSectionCard";
import { selectorNewCollectionProduct } from "../../store/selectors";
import { fetchNewCollectionProduct } from "../../store/actions";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const newCollectionArray = useSelector(selectorNewCollectionProduct);
  const [oneProduct] = newCollectionArray;

  console.log(oneProduct);
  useEffect(() => {
    dispatch(fetchNewCollectionProduct());
  }, []);
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
  } = oneProduct;
  return (
    <>
      <Header />
      <div className="product-card">
        <div className="product-card__main">
          <div className="product-card__main-description">
            <img src={url} alt={alt} />
          </div>
          <ProductPrice name={name} />
        </div>
        <OtherProduct cards={"similar cards"} title={"similar cards"} />
        <div className="product-card__main-additionally">
          <ProductRewier />
          <ProductPrice />
        </div>
        <OtherProduct cards={"popular cards"} title={"popular cards"} />
      </div>
      <Footer />
    </>
  );
};
export default ProductCard;
