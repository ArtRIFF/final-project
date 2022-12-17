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
const CatalogSectionPage = ({ alreadyFilteredArray }) => {
  const dispatch = useDispatch();

  const [filtredArray, setFiltredArray] = useState(alreadyFilteredArray);
  const allCollectionArray = useSelector(selectorAllCollectionProduct);
  const [showAsideFilter, setModalRender] = useState(false);
  const [totalItems, setTotalItems] = useState(allCollectionArray.length);


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
  const [itemsPerPage] = useState(12);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allCollectionArray.slice(firstItemIndex, lastItemIndex);
  const [allCollectionArrayIsFiltered, setAllCollectionArrayIsFiltered] =
    useState(false);

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
  }, [allCollectionArray]); //покласти стан в редакс для доступності

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
              filtredArray.length !== 0 ? filtredArray : allCollectionArray
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
            <Items
              items={currentItems}
              loading={loading}
              filterSearchingResults={array}
              allCollectionArrayIsFiltered={allCollectionArrayIsFiltered}
              allCollectionArray={allCollectionArray}
            />
          ) : (
            <div>
              {filtredArray.length === 0
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
            </div>
          )}
        </div>
        <div className="paginnation-wrapper">
          {loading === true ? (
            <div></div>
          ) : (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              setCurrentPage={setCurrentPage}
            />
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
