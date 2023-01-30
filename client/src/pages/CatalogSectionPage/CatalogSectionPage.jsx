import "./style.scss";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import AsideFilter from "./components/AsideFilter/AsideFilter";
import CategoryCardsContainer from "./components/Pagination/CategoryCardsContainer";
import Pagination from "./components/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { selectorFilteredProducts } from "../../store/selectors";
import { selectorIsProductsLoading } from "../../store/selectors";
import { fetchFilteredProducts } from "../../store/filteredProducts/filteredProductsSlice";

const addToURLWithoutReloading = (url, addConfigSting) =>
  window.history.pushState(
    null,
    null,
    `${url}${addConfigSting ? "?" + addConfigSting : ""}`
  );

const CatalogSectionPage = ({ stringFilterParam }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { products, productsQuantity } = useSelector(selectorFilteredProducts);
  const  isProductsLoading  = useSelector(selectorIsProductsLoading);
  const [showAsideFilter, setModalRender] = useState(false);
  
  console.log("isProductsLoading", isProductsLoading);

  const [productTypeUrl, setProductTypeUrl] = useState(null);
  const [sortURL, setSortURL] = useState("");
  const [paginationURL, setPaginationURL] = useState("1");

  const [loading, setLoading] = useState(false);
  const itemsPerPage = 12;
  const [showPagination, setShowPagination] = useState(false);

  const callAsideFilter = () => {
    setModalRender(true);
  };

  useEffect(() => {
    productsQuantity === undefined ? setLoading(true) : setLoading(false);
  }, [productsQuantity]);

  useEffect(() => {
    const shouldShowPagination = loading === false && productsQuantity > 0;
    setShowPagination(shouldShowPagination);
  }, [loading, productsQuantity]);

  useEffect(() => {
    if (productTypeUrl !== null) {
      const summaryFilterParam =
        productTypeUrl +
        (sortURL ? "&" + sortURL : "") +
        (paginationURL ? "&perPage=12&startPage=" + paginationURL : "");
      addToURLWithoutReloading(location.pathname, summaryFilterParam);
      dispatch(fetchFilteredProducts(summaryFilterParam));
    }
  }, [productTypeUrl, sortURL, paginationURL]);

  const hideAsideFilter = (event) => {
    const isFilterElement = !!event.target.closest(
      ".asideFilter-wrapper--show"
    );
    const isCallButton = !!event.target.closest(".category-filter--btn");

    if (event && !isFilterElement && !isCallButton) {
      setModalRender(false);
    }
  };

  const filterRequest = (url) => {
    setProductTypeUrl(url);
    setSortURL("");
    setPaginationURL(1);
    document.querySelector(".category-filter select").value = "DEFAULT";
  };

  const filterSortRequest = (url) => {
    setSortURL(url);
  };

  const paginationRequest = (url) => {
    setPaginationURL(url);
  };

  return (
    <div className="container" onClick={hideAsideFilter}>
      <div className="breadcrumbs__catalog">
        <Breadcrumbs />
      </div>
      <div className="grid-wrapper">
        <div className="catalogPageImg-wrapper">
          <img
            src="/img/catalogSectionPage/CategorySectionMainImg.jpg"
            alt="Category Section Main Imgage"
          />
        </div>
        <aside
          className={`${
            showAsideFilter
              ? "asideFilter-wrapper--show"
              : "asideFilter-wrapper"
          }`}
        >
          <AsideFilter filterRequest={filterRequest} />
        </aside>
        <div className="filter-wrapper">
          <CategoryFilter
            onClickFunc={callAsideFilter}
            setResult={productsQuantity}
            filterRequest={filterSortRequest}
          />
        </div>
        <div className="categoryCards-wrapper">
          <CategoryCardsContainer
            isProductsLoading={isProductsLoading}
            filterSearchingResults={productsQuantity}
            allCollectionArray={products}
          />
        </div>
        <div className="paginnation-wrapper">
          {showPagination && (
            <Pagination
              paginationRequest={paginationRequest}
              itemsPerPage={itemsPerPage}
              productsQuantity={productsQuantity}
            />
          )}
        </div>
      </div>
    </div>
  );
};

CatalogSectionPage.propTypes = {
  stringFilterParam: PropTypes.string,
};

CatalogSectionPage.defaultProps = {
  stringFilterParam: "",
};

export default CatalogSectionPage;
