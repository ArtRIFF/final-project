import "./style.scss";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import AsideFilter from "./components/AsideFilter/AsideFilter";
import CategoryCardsContainer from "./components/Pagination/CategoryCardsContainer";
import Pagination from "./components/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { selectorFilteredProducts } from "../../store/selectors";
import { fetchFilteredProducts } from "../../store/filteredProducts/filteredProductsSlice";

const addToURLWithoutReloading = (url, addConfigSting) => window.history.pushState(null, null, `${url}${addConfigSting ? "?" + addConfigSting : ""}`);



const CatalogSectionPage = ({ stringFilterParam }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { products, productsQuantity } = useSelector(selectorFilteredProducts);
  const [showAsideFilter, setModalRender] = useState(false);
  const [totalItems, setTotalItems] = useState(5);

  const [filterURL, setFilterURL] = useState('');
  const [sortURL, setSortURL] = useState('');
  const [paginationURL, setPaginationURL] = useState('1');

  const callAsideFilter = () => {
    setModalRender(true);
  };

  useEffect(() => {
    // const url = window.location.search;
    // const params = new URLSearchParams(url);
    // const categoriesParam = params.get('categories');
//set Timeout
    // if (categoriesParam) {
    //   setFilterURL("categories=" + categoriesParam);
    // }
  
  }, []);

  useEffect(() => {
    const summaryFilterParam = filterURL + (sortURL ? "&" + sortURL : "") + (paginationURL ? "&perPage=12&startPage=" + paginationURL : "")
    addToURLWithoutReloading(location.pathname, summaryFilterParam);
    dispatch(fetchFilteredProducts(summaryFilterParam));
  }, [filterURL, sortURL, paginationURL]);

  const hideAsideFilter = (event) => {
    const isFilterElement = !!event.target.closest(
      ".asideFilter-wrapper--show"
    );
    const isCallButton = !!event.target.closest(".category-filter--btn");

    if (event && !isFilterElement && !isCallButton) {
      setModalRender(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const [itemsPerPage] = useState(12);


  const [allCollectionArrayIsFiltered, setAllCollectionArrayIsFiltered] =
    useState(false);
  const [hasAnyFilters, setHasAnyFilters] = useState();
  const [showPagination, setShowPagination] = useState(true);


  const filterRequest = (url) => {
    setFilterURL(url);
    setSortURL("");
    setPaginationURL(1);
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
        {/* <Breadcrumbs /> */}
      </div>
      <div className="grid-wrapper">
        <div className="catalogPageImg-wrapper">
          <img
            src="/img/catalogSectionPage/CategorySectionMainImg.jpg"
            alt="Category Section Main Imgage"
          />
        </div>
        <aside
          className={`${showAsideFilter
            ? "asideFilter-wrapper--show"
            : "asideFilter-wrapper"
            }`}
        >
          <AsideFilter
            filterRequest={filterRequest}
          />
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
            loading={loading}
            filterSearchingResults={productsQuantity}
            allCollectionArray={products}
          />
        </div>
        <div className="paginnation-wrapper">
          {showPagination === false ? (
            <div></div>
          ) : (
            <Pagination
              paginationRequest={paginationRequest}
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              setCurrentPage={setCurrentPage}
              allCollectionArrayIsFiltered={allCollectionArrayIsFiltered}
            />
          )}
        </div>
      </div>
    </div>
  );
};

CatalogSectionPage.propTypes = {
  stringFilterParam: PropTypes.string
};

CatalogSectionPage.defaultProps = {
  stringFilterParam: "",
};

export function setCurrentPage() { };
export default CatalogSectionPage;