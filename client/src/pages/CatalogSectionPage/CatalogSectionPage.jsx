import "./style.scss";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import AsideFilter from "./components/AsideFilter/AsideFilter";
import Items from "./components/Pagination/Items";
import Pagination from "./components/Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { selectorAllCollectionProduct } from "../../store/selectors";
import { fetchAllCollectionProduct } from "../../store/actions";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
const CatalogSectionPage = ({ alreadyFilteredArray }) => {
  const dispatch = useDispatch();

  const [filtredArray, setFiltredArray] = useState(alreadyFilteredArray);
  const allCollectionArray = useSelector(selectorAllCollectionProduct);
  const [showAsideFilter, setModalRender] = useState(false);

  const callAsideFilter = () => {
    setModalRender(true);
  };

  useEffect(() => {
    dispatch(fetchAllCollectionProduct());
  }, []);

  const filterRequest = (array) => {
    setFiltredArray(array);
  };

  const hideAsideFilter = (event) => {
    const isFilterElement = !!event.target.closest(
      ".asideFilter-wrapper--show"
    );
    const isCallButton = !!event.target.closest(".category-filter--btn");

    if (event && !isFilterElement && !isCallButton) {
      setModalRender(false);
    }
  };

  const array = Array.isArray(filtredArray)
    ? filtredArray.length
    : allCollectionArray.length;

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(11);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allCollectionArray.slice(firstItemIndex, lastItemIndex);
  const [allCollectionArrayIsFiltered, setAllCollectionArrayIsFiltered] =
    useState(false);

  useEffect(() => {
    //resetAllParam
    if (filtredArray.length === 0) {
      setAllCollectionArrayIsFiltered(false);
    } else {
      setAllCollectionArrayIsFiltered(true);
    }
  }, [filtredArray]);

  useEffect(() => {
    if (allCollectionArray.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [allCollectionArray]); //покласти стан в редакс для доступності

  return (
    <div className="container" onClick={hideAsideFilter}>
      <div className="breadcrumbs-wrapper">
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
          className={`${
            showAsideFilter
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
            setResult={array}
            allCollectionArray={
              filtredArray ? filtredArray : allCollectionArray
            }
            filterRequest={filterRequest}
          />
        </div>
        <div
          style={{
            backgroundColor: "rgba(100, 85, 45, 0.5)",
            width: "850px",
            height: "510px",
          }}
          className="categoryCards-wrapper"
        >
          {allCollectionArrayIsFiltered === false ? (
            <Items items={currentItems} loading={loading} />
          ) : (
          <div>
            {!Array.isArray(filtredArray)
              ? allCollectionArray.map((item, i) => {
                  const {
                    statusProduct,
                    currentPrice,
                    insertNumber,
                    alt,
                    bestseller,
                    newProduct,
                  } = item;
                  return (
                    <p key={i}>
                      {i} statusProduct{statusProduct} insertNumber:
                      {insertNumber} price:{currentPrice}alt:{alt} bestseller:
                      {bestseller} newProduct:{newProduct}
                    </p>
                  );
                })
              : filtredArray.map((item, i) => {
                  const {
                    currentPrice,
                    insertNumber,
                    statusProduct,
                    categories,
                    metal,
                  } = item;
                  return (
                    <p key={i}>
                      {i}statusProduct{statusProduct} statusProduct:
                      {statusProduct} categories:{categories} price:
                      {currentPrice}
                    </p>
                  );
                })}
        </div>)}
        </div>
        <div
          // style={{ backgroundColor: "grey", width: "850px", height: "88px" }}
          className="paginnation-wrapper"
        >
          {loading === true ? (
            <LoadingSpinner />
          ) : (
          <Pagination 
            loading={loading}
            itemsPerPage={itemsPerPage}
            totalItems={allCollectionArray.length}
            setCurrentPage={setCurrentPage} />
          )}
        </div>
      </div>
    </div>
  );
};

CatalogSectionPage.defaultProps = {
  alreadyFilteredArray: [],
};

export default CatalogSectionPage;
