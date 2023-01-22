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

import { selectorAllCollectionProduct, selectorFilteredProducts } from "../../store/selectors";
import { fetchAllCollectionProduct, fetchFilteredProducts } from "../../store/actions";

const addToURLWithoutReloading = (url, addConfig) => window.history.pushState(null,null, `${url}${addConfig?"/filter?"+addConfig:""}`);

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
const CatalogSectionPage = ({ alreadyFilteredArray }) => {
  const dispatch = useDispatch();
  let location = useLocation();

  const [filtredArray, setFiltredArray] = useState(alreadyFilteredArray);
  const allCollectionArray = useSelector(selectorAllCollectionProduct);
  const [showAsideFilter, setModalRender] = useState(false);
  const [totalItems, setTotalItems] = useState(allCollectionArray.length);

  const [filterURL, setFilterURL] = useState('');
  const [sortURL, setSortURL] = useState('');
  const [paginationURL, setPaginationURL] = useState('');
// new logic
  const fArray = useSelector(selectorFilteredProducts);

  const callAsideFilter = () => {
    setModalRender(true);
  };
  // http://localhost:3000/jewelry/filter?collectionName=max%20spass&sort=NEW&perPage=12&startPage=2
  useEffect(() => {
    dispatch(fetchAllCollectionProduct());
    dispatch(fetchFilteredProducts("insertType=pearl"));
    catchURLconfigAndChange();
  },[]);

  useEffect(() => {
    console.log(fArray);
    const storageConfigURL = localStorage.getItem('configURL');
    if (!storageConfigURL) {
      addToURLWithoutReloading(location.pathname, filterURL + (sortURL?"&"+ sortURL: "") + (paginationURL?"&perPage=12&startPage="+ paginationURL: ""));
    } else {
      localStorage.removeItem('configURL');
    }
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

  const array = (filtredArray.length !== 0)
    ? filtredArray.length
    : allCollectionArray.length;

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const [allCollectionArrayIsFiltered, setAllCollectionArrayIsFiltered] =
    useState(false);
  const [hasAnyFilters, setHasAnyFilters] = useState();
  const [showPagination, setShowPagination] = useState(true);
  const currentItems = allCollectionArrayIsFiltered
    ? filtredArray.slice(firstItemIndex, lastItemIndex)
    : allCollectionArray.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    if (loading === true) {
      setShowPagination(false);
    } else if (hasAnyFilters === true && allCollectionArray.length === array) {
      setShowPagination(false);
    } else {
      setShowPagination(true);
    }
  }, [loading, hasAnyFilters, allCollectionArray.length, array]);

  const filterRequest = (array, hasAnyFilters, url) => {
      setFiltredArray(array);
      setFilterURL(url);
      setSortURL("");
      setPaginationURL("");
    if (hasAnyFilters === true) {
      setAllCollectionArrayIsFiltered(true);
      setHasAnyFilters(true);
    } else {
      setAllCollectionArrayIsFiltered(false);
      setHasAnyFilters(false);
    }
  };

  const filterSortRequest = (array, hasAnyFilters, url) => {
    setFiltredArray(array);
    setSortURL(url);
    if (hasAnyFilters === true) {
      setAllCollectionArrayIsFiltered(true);
      setHasAnyFilters(true);
    } else {
      setAllCollectionArrayIsFiltered(false);
      setHasAnyFilters(false);
    }
  };

  const paginationRequest = (url) => {
    setPaginationURL(url);
  };


  useEffect(() => {
    if (filtredArray.length !== 0) {
      setAllCollectionArrayIsFiltered(true);
    } else {
      setAllCollectionArrayIsFiltered(false);
    }
  }, [filtredArray]);

  useEffect(() => {
    if (allCollectionArray.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [allCollectionArray]);

  useEffect(() => {
    if (allCollectionArrayIsFiltered === true) {
      setTotalItems(filtredArray.length);
    } else {
      setTotalItems(allCollectionArray.length);
    }
  }, [
    allCollectionArrayIsFiltered,
    filtredArray.length,
    allCollectionArray.length,
  ]);

  useEffect(() => {
    if (filtredArray.length === allCollectionArray.length) {
      setAllCollectionArrayIsFiltered(false);
    }
  }, [filtredArray.length, allCollectionArray.length]);

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
            allCollectionArray={allCollectionArray}
            filterRequest={filterRequest}
          />
        </aside>
        <div className="filter-wrapper">
          <CategoryFilter
            onClickFunc={callAsideFilter}
            setResult={filtredArray.length}
            allCollectionArray={
              filtredArray.length !== 0 ? filtredArray : allCollectionArray
            }
            filterRequest={filterSortRequest}
            hasAnyFilters= {hasAnyFilters}
          />
        </div>
        <div className="categoryCards-wrapper">
          <CategoryCardsContainer
            items={currentItems}
            loading={loading}
            hasAnyFilters={hasAnyFilters}
            filterSearchingResults={array}
            allCollectionArray={allCollectionArray}
          />
        </div>
        <div className="paginnation-wrapper">
          {showPagination === false ? (
            <div></div>
          ) : (
            <Pagination
              paginationRequest={paginationRequest}
              hasAnyFilters={hasAnyFilters}
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
  alreadyFilteredArray: PropTypes.array
};

CatalogSectionPage.defaultProps = {
  alreadyFilteredArray: [],
};

export function setCurrentPage() {};
export default CatalogSectionPage;
