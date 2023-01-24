import "./style.scss";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import AsideFilter from "./components/AsideFilter/AsideFilter";
import CategoryCardsContainer from "./components/Pagination/CategoryCardsContainer";
import Pagination from "./components/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { selectorFilteredProducts } from "../../store/selectors";
import { fetchFilteredProducts } from "../../store/filteredProducts/filteredProductsSlice";

const addToURLWithoutReloading = (url, addConfigSting) => window.history.pushState(null,null, `${url}${addConfigSting?"/filter?"+addConfigSting:""}`);

const catchURLconfigAndChange = () => {
const url = window.location.href;
const storageConfigURL = localStorage.getItem('configURL');
if (url.indexOf("filter") !== -1) {
  const configURL = url.indexOf("filter") !== -1?url.slice(url.indexOf("filter")+7): "";
  localStorage.setItem('configURL', configURL);
  const basicURL = url.slice(0,url.indexOf("filter")-1);
  window.location.href = basicURL;
}

if (storageConfigURL) {
  addToURLWithoutReloading(url, storageConfigURL);
  localStorage.removeItem('configURL'); 
}
}

const getURLFilter = () => {
  const storageConfigURL = localStorage.getItem('configURL');
  if (storageConfigURL) {
    return storageConfigURL;
  } else {
    return "";
  };
}
const CatalogSectionPage = ({ stringFilterParam }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const {products,productsQuantity} = useSelector(selectorFilteredProducts);

  const [showAsideFilter, setModalRender] = useState(false);
  const [totalItems, setTotalItems] = useState(5);

  const [filterURL, setFilterURL] = useState('');
  const [sortURL, setSortURL] = useState('');
  const [paginationURL, setPaginationURL] = useState('1');

  const callAsideFilter = () => {
    setModalRender(true);
  };

  useEffect(() => {
    // dispatch(fetchAllCollectionProduct());
    // dispatch(fetchFilteredProducts(stringFilterParam));
    dispatch(fetchFilteredProducts(stringFilterParam));
    catchURLconfigAndChange();
  },[]);

  useEffect(() => {
    const storageConfigURL = localStorage.getItem('configURL');
    const summaryFilterParam = filterURL + (sortURL?"&"+ sortURL: "") + (paginationURL?"&perPage=12&startPage="+ paginationURL: "")
    if (!storageConfigURL) {
      addToURLWithoutReloading(location.pathname, summaryFilterParam);
    } else {
      localStorage.removeItem('configURL');
    }
    dispatch(fetchFilteredProducts(summaryFilterParam));
  },[filterURL,sortURL,paginationURL]);

  const hideAsideFilter = (event) => {
    const isFilterElement = !!event.target.closest(
      ".asideFilter-wrapper--show"
    );
    const isCallButton = !!event.target.closest(".category-filter--btn");

    if (event && !isFilterElement && !isCallButton) {
      setModalRender(false);
    }
  };

  // const array = (filteredArray.length !== 0)
  //   ? filteredArray.length
  //   : allCollectionArray.length;

  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  // const lastItemIndex = currentPage * itemsPerPage;
  // const firstItemIndex = lastItemIndex - itemsPerPage;

  const [allCollectionArrayIsFiltered, setAllCollectionArrayIsFiltered] =
    useState(false);
  const [hasAnyFilters, setHasAnyFilters] = useState();
  const [showPagination, setShowPagination] = useState(true);
  // const currentItems =  filteredArray.slice(firstItemIndex, lastItemIndex);
 

  // useEffect(() => {
  //   if (loading === true) {
  //     setShowPagination(false);
  //   } else if (hasAnyFilters === true && allCollectionArray.length === array) {
  //     setShowPagination(false);
  //   } else {
  //     setShowPagination(true);
  //   }
  // }, [loading, hasAnyFilters, allCollectionArray.length, array]);

  const filterRequest = (url) => {
      setFilterURL(url);
      setSortURL("");
      setPaginationURL("");
    // if (hasAnyFilters === true) {
    //   setAllCollectionArrayIsFiltered(true);
    //   setHasAnyFilters(true);
    // } else {
    //   setAllCollectionArrayIsFiltered(false);
    //   setHasAnyFilters(false);
    // }
  };

  const filterSortRequest = (url) => {
    setSortURL(url);
  };

  const paginationRequest = (url) => {
    setPaginationURL(url);
  };


  // useEffect(() => {
  //   if (filteredArray.length !== 0) {
  //     setAllCollectionArrayIsFiltered(true);
  //   } else {
  //     setAllCollectionArrayIsFiltered(false);
  //   }
  // }, [filteredArray]);

  // useEffect(() => {
  //   if (allCollectionArray.length === 0) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [allCollectionArray]);

  // useEffect(() => {
  //   if (allCollectionArrayIsFiltered === true) {
  //     setTotalItems(filteredArray.length);
  //   } else {
  //     setTotalItems(allCollectionArray.length);
  //   }
  // }, [
  //   allCollectionArrayIsFiltered,
  //   filteredArray.length,
  //   allCollectionArray.length,
  // ]);

  // useEffect(() => {
  //   if (filteredArray.length === allCollectionArray.length) {
  //     setAllCollectionArrayIsFiltered(false);
  //   }
  // }, [filteredArray.length, allCollectionArray.length]);

  return (
    <div className="container" onClick={hideAsideFilter}>
      <div className="breadcrumbs__catalog">
        <Breadcrumbs />
      </div>
      <div className="grid-wrapper">
        <div className="catalogPageImg-wrapper">
          <img
            src="img/catalogSectionPage/CategorySectionMainImg.jpg"
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

export function setCurrentPage() {};
export default CatalogSectionPage;
