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

  const [items, setitems] = useState([
    11, 124, 1244, 1241, 12, 12, 1, 12, 12, 12, 3, 4, 5, 6, 7, 3, 12, 12, 12,
    124, 15, 12, 53735, 12312,
  ]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filtredArray, setFiltredArray] = useState(alreadyFilteredArray);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      // const res = await axios.get("https://final-backend-new.onrender.com"); //адреса сторінки на бекенді для отримання елементів сторінки
      // setitems(res.data);
      setLoading(false);
    };
    getItems();
  }, []);
  const [showAsideFilter, setModalRender] = useState(false);
  const allCollectionArray = useSelector(selectorAllCollectionProduct);

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

  return (
    <div className="container" onClick={hideAsideFilter}>
      <div className="grid-wrapper">
        <div className="breadcrumbs-wrapper">
          <Breadcrumbs />
        </div>
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
          <CategoryFilter onClickFunc={callAsideFilter} setResult={array} />
        </div>
        <div
          style={{
            backgroundColor: "rgba(100, 85, 45, 0.5)",
            width: "850px",
            height: "510px",
          }}
          className="categoryCards-wrapper"
        >
          {!Array.isArray(filtredArray)
            ? allCollectionArray.map((item, i) => {
              const { name, insertNumber, alt, bestseller, newProduct } = item;
              return (
                <p key={i}>
                  {i} Product:{name} insertNumber:{insertNumber} alt:{alt} bestseller:
                  {bestseller} newProduct:{newProduct}
                </p>
              );
            })
            : filtredArray.map((item, i) => {
              const { name, statusProduct, insertNumber, collectionName, categories, metal } = item;
              return (
                <p key={i}>
                  {i} name:{name} statusProduct:{statusProduct} categories:{categories}
                </p>
              );
            })}
        </div>
        <div
          style={{ backgroundColor: "grey", width: "396px", height: "88px" }}
          className="paginnation-wrapper"
        >
          <Items items={currentItem} loading={loading} />
          <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} />
        </div>
      </div>
    </div>
  );
};

CatalogSectionPage.defaultProps = {
  alreadyFilteredArray: [],
};

export default CatalogSectionPage;
