// import CollectionSectionCard from "../../../../CollectionSection/CollectionSectionCard";
import { useDispatch,useSelector } from "react-redux";
import { selectorAllCollectionProduct } from "../../../../../store/selectors";
import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../../../../pages/CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";

import "./SearchPage.scss";

import CategorySectionCard from "../../../../CatalogSection/CategorySectionCard";
import { fetchAllCollectionProduct } from "../../../../../store/products/productsSlice";
import LoadingSpinner from "../../../../../pages/CatalogSectionPage/components/LoadingSpinner/LoadingSpinner";
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchPage = () => {
    const AllCollectionProduct = useSelector(selectorAllCollectionProduct);
    const [viewAll, setViewAll] = useState(false);
    const dispatch = useDispatch();

    // const numberOfItems = viewAll ? AllCollectionProduct.length : 12;
    useEffect(() => {
      dispatch(fetchAllCollectionProduct());
    }, []);

    const numberOfItems = () => {
      if (viewAll) {
        return AllCollectionProduct.length ;
      } else {
        if (window.screen.width > 768) {
          return 4;
        } else if (window.screen.width <= 768 && window.screen.width >= 481) {
          return 3;
        } else if (window.screen.width < 480) {
          return 2;
        }
      }
    };
    
    //infinity scroll
    const [items, setItems] = useState([]);

    const [hasMore, sethasMore] = useState(true);

    const [page, setpage] = useState(2);

    useEffect(() => {
      const getProducts = async () => {
        const res = await fetch(
          `https://final-backend-new.onrender.com/api/products`
        );
        const data = await res.json();
        setViewAll(data);
      };

      getProducts();
    }, []);

    const fetchProduct = async () => {
      const res = await fetch(
        `https://final-backend-new.onrender.com/api/products?_page=${page}&_limit=10`
      );
      const data = await res.json();
      return data;
    };

    const fetchData = async () => {
      const productsFormServer = await fetchProduct();

      setViewAll([...viewAll, ...productsFormServer]);
      if (productsFormServer.length === 0 || productsFormServer.length < 12) {
        sethasMore(false);
      }
      setpage(page + 1);
    };
    //infinity scroll
    return (
      <InfiniteScroll
            dataLength={AllCollectionProduct.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            // loader={<LoadingSpinner />}
            // endMessage={<EndMsg />}
          >
        <div className="result container">
          <div className="result__breadcrumbs">
            <Breadcrumbs/>
          </div>
          <div  className="result__search">
              {AllCollectionProduct.slice(0, numberOfItems()).map((card, index) => {
              return (
                <CategorySectionCard product={card} key={index} />
              );
              })}
          </div>
          
        </div>
      </InfiniteScroll>
    )
}

export default SearchPage;