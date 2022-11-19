import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductPrice from "./ProductPrice";
import AdditionalProducts from "./AdditionalProducts";
import ProductRewier from "./ProductRewier";
import CollectionSectionCard from "../../components/CollectionSection/CollectionSectionCard/CollectionSectionCard";
import { selectorNewCollectionProduct } from "../../store/selectors";
import { fetchNewCollectionProduct } from "../../store/actions";

const ProductCard = (props) => {
  // const dispatch = useDispatch();
  // const newCollectionArray = useSelector(selectorNewCollectionProduct);
  // const [oneProduct] = newCollectionArray;

  // console.log(oneProduct);
  // useEffect(() => {
  //   dispatch(fetchNewCollectionProduct());
  // }, []);
  // const {
  //   name,
  //   price,
  //   url,
  //   subtitle,
  //   alt,
  //   oldPrice,
  //   sale,
  //   bestseller,
  //   newProduct,
  //   stars,
  //   reviews,
  //   article,
  // } = oneProduct;
  return (
    <>
      <Header />
      <div className="product-card">
        <div className="product-card__main">
          {/* <div className="product-card__main-description">
            <img src={url} alt={alt} />
          </div>
          <ProductPrice name={name} /> */}
        </div>
        <AdditionalProducts cards={"similar cards"} title={"similar cards"} sectionTitle = 'Similar'/>
        <div className="product-card__main-additionally">
          <ProductRewier />
          <ProductPrice />
        </div>
        <AdditionalProducts cards={"popular cards"} title={"popular cards"} sectionTitle = 'Popular'/>
      </div>
      <Footer />
    </>
  );
};
export default ProductCard;
