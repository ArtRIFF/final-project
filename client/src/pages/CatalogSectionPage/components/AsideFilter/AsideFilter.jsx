import './style.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AsideFilter = ({ filterRequest, setCurrentPage }) => {
  const url = window.location.search;
  const params = new URLSearchParams(url);

  const categoriesParam = params.get("categories")?.split(",");
  const metalParam = params.get("metal")?.split(",");
  const collectionParam = params.get("collectionName")?.split(",");
  const metalColorParam = params.get("metalColor")?.split(",");
  const insertTypeParam = params.get("insertType")?.split(",");
  const statusTypeParam = params.get("statusProduct")?.split(",");
  const minPriceParam = params.get("minPrice");
  const maxPriceParam = params.get("maxPrice");

  const [productsType, setProductsType] = useState(categoriesParam || []);
  const [metalType, setMetalType] = useState(metalParam || []);
  const [collectionType, setCollectionType] = useState(collectionParam || []);
  const [metalColorType, setMetalColorType] = useState(metalColorParam || []);
  const [insertType, setInsertType] = useState(insertTypeParam || []);
  const [statusType, setStatusType] = useState(statusTypeParam || []);
  const [minPrice, setMinPrice] = useState(minPriceParam || 0);
  const [maxPrice, setMaxPrice] = useState(maxPriceParam || 0);

  useEffect(() => {
    updateFilter();
    const value = document.querySelectorAll(".filter-parameter__checkbox");
    value.forEach((item) => {
      productsType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector("input").checked = true;
        }
      });

      metalType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector("input").checked = true;
        }
      });

      collectionType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector("input").checked = true;
        }
      });

      metalColorType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector("input").checked = true;
        }
      });

      insertType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector("input").checked = true;
        }
      });

      statusType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector("input").checked = true;
        }
      });
    });
  }, [
    productsType,
    metalType,
    collectionType,
    metalColorType,
    insertType,
    minPrice,
    maxPrice,
    statusType,
  ]);

  const updateFilter = () => {
    let filterParamArray = [];

    const pushToFilterParamArray = (param) => {
      if (param) {
        filterParamArray.push(param);
      }
    };

    const productsTypeParam = productsType.length
      ? `categories=${productsType.join(",")}`
      : "";
    pushToFilterParamArray(productsTypeParam);
    const metalTypeParam = metalType.length
      ? `metal=${metalType.join(",")}`
      : "";
    pushToFilterParamArray(metalTypeParam);
    const collectionTypeParam = collectionType.length
      ? `collectionName=${collectionType.join(",")}`
      : "";
    pushToFilterParamArray(collectionTypeParam);
    const metalColorTypeParam = metalColorType.length
      ? `metalColor=${metalColorType.join(",")}`
      : "";
    pushToFilterParamArray(metalColorTypeParam);
    const statusTypeParam = statusType.length
      ? `statusProduct=${statusType.join(",")}`
      : "";
    pushToFilterParamArray(statusTypeParam);
    const insertTypeParam = insertType.length
      ? `insertType=${insertType.join(",")}`
      : "";
    pushToFilterParamArray(insertTypeParam);

    let rangePriceParam = "";
    if (maxPrice && minPrice) {
      rangePriceParam = `maxPrice=${maxPrice}&minPrice=${minPrice}`;
    }
    if (maxPrice && !minPrice) {
      rangePriceParam = `maxPrice=${maxPrice}&minPrice=0`;
    }
    if ((!maxPrice && minPrice) || (!maxPrice && !minPrice)) {
      rangePriceParam = "";
    }

    pushToFilterParamArray(rangePriceParam);

    const filterParam = filterParamArray.length
      ? `${filterParamArray.join("&")}`
      : "";
    filterRequest(filterParam);
  };

  const onTypeChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest(".filter-parameter__checkbox").dataset
      .categoryName;
    const arrayValue = value.split(" ");
    if (arrayValue.length > 1) {
      arrayValue.forEach(() => {
        setProductsType(
          !productsType.includes(arrayValue[0]) && checked
            ? [...productsType, ...arrayValue]
            : productsType.filter((n) => !arrayValue.includes(n))
        );
      });
    } else {
      setProductsType(
        !productsType.includes(value) && checked
          ? [...productsType, value]
          : productsType.filter((n) => n !== value)
      );
    }
  };

  const onMetalChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest(".filter-parameter__checkbox").dataset
      .categoryName;
    setMetalType(
      !metalType.includes(value) && checked
        ? [...metalType, value]
        : metalType.filter((n) => n !== value)
    );
  };

  const onCollectionChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest(".filter-parameter__checkbox").dataset
      .categoryName;
    setCollectionType(
      !collectionType.includes(value) && checked
        ? [...collectionType, value]
        : collectionType.filter((n) => n !== value)
    );
  };

  const onMetalColorChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest(".filter-parameter__checkbox").dataset
      .categoryName;
    setMetalColorType(
      !metalColorType.includes(value) && checked
        ? [...metalColorType, value]
        : metalColorType.filter((n) => n !== value)
    );
  };

  const onStatusChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest(".filter-parameter__checkbox").dataset
      .categoryName;
    setStatusType(
      !statusType.includes(value) && checked
        ? [...statusType, value]
        : statusType.filter((n) => n !== value)
    );
  };

  const onInsertChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest(".filter-parameter__checkbox").dataset
      .categoryName;
    setInsertType(
      !insertType.includes(value) && checked
        ? [...insertType, value]
        : insertType.filter((n) => n !== value)
    );
  };

  const onMinPriceChange = ({ target: { value } }) => {
    if (Number.isFinite(+value)) {
      setMinPrice(value);
    }
  };

  const onMaxPriceChange = ({ target: { value } }) => {
    if (Number.isFinite(+value)) {
      setMaxPrice(value);
    }
  };

  const accordionAnimate = (e) => {
    const panels = [...e.target.closest(".aside-filter__wrapper").children];
    const indexTargetElem = panels.indexOf(
      e.target.closest(".filter-parameter")
    );
    panels.forEach((panel, i) => {
      if (
        i !== indexTargetElem &&
        !panel.classList.contains("filter-parameter__hide")
      ) {
        let panelContainer = panel.closest(".filter-parameter").children[1];
        panel.classList.add("filter-parameter__hide");
        panelContainer.style.maxHeight = null;
      }
    });

    e.target
      .closest(".filter-parameter")
      .classList.toggle("filter-parameter__hide");
    const container = e.target.closest(".filter-parameter").children[1];
    if (container.style.maxHeight) {
      container.style.maxHeight = null;
    } else {
      container.style.maxHeight = container.scrollHeight + "px";
    }
  };

  const resetAllParam = () => {
    const checkboxElements = document.querySelectorAll(
      ".filter-parameter__checkbox input"
    );
    const inputElements = document.querySelectorAll(".price-container input");
    checkboxElements.forEach((checkbox) => {
      checkbox.checked = false;
    });

    inputElements.forEach((input) => {
      input.value = "";
    });

    setCollectionType([]);
    setProductsType([]);
    setMetalType([]);
    setMetalColorType([]);
    setInsertType([]);
    setMaxPrice(0);
    setMinPrice(0);
    setStatusType([]);
    setCurrentPage(1);
    updateFilter([]);
  };

  return (
    <div className="aside-filter">
      <div className="aside-filter__header">
        <h3 className="aside-filter__title">Filters</h3>
        <button onClick={resetAllParam} className="aside-filter__button">
          Reset all
        </button>
      </div>
      <div className="aside-filter__wrapper">
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Price</h5>
            <button
              onClick={accordionAnimate}
              className="filter-parameter__button"
            ></button>
          </div>
          <div className="filter-parameter__container price-container">
            <input
              onChange={onMinPriceChange}
              data-index={0}
              value={minPrice}
              type="text"
              placeholder={minPrice}
            />
            <span>-</span>
            <input
              onChange={onMaxPriceChange}
              data-index={1}
              value={maxPrice}
              type="text"
              placeholder={maxPrice}
            />
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Collection</h5>
            <button
              onClick={accordionAnimate}
              className="filter-parameter__button"
            ></button>
          </div>
          <div className="filter-parameter__container">
            <label
              onClick={onCollectionChange}
              data-category-name={"vintage"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Vintage</span>
            </label>
            <label
              onClick={onCollectionChange}
              data-category-name={"seabed"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Seabed</span>
            </label>
            <label
              onClick={onCollectionChange}
              data-category-name={"refinement"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Refinement</span>
            </label>
            <label
              onClick={onCollectionChange}
              data-category-name={"capsule"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Capsule</span>
            </label>
            <label
              onClick={onCollectionChange}
              data-category-name={"max spass"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Max Spass</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Insert</h5>
            <button
              onClick={accordionAnimate}
              className="filter-parameter__button"
            ></button>
          </div>
          <div className="filter-parameter__container">
            <label
              onClick={onInsertChange}
              data-category-name={"Without inserting"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Without insertion</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"pearl"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Pearl</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"zirconia"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Zirconia</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"diamond"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Diamond</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"Pearl and diamonds"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Pearl and diamonds</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"semi-precious"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Semi-precious</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"nacre"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Nacre</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"amethyst"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Amethyst</span>
            </label>
            <label
              onClick={onInsertChange}
              data-category-name={"onixl"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Onixl</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Metal</h5>
            <button
              onClick={accordionAnimate}
              className="filter-parameter__button"
            ></button>
          </div>
          <div className="filter-parameter__container">
            <label
              onClick={onMetalChange}
              data-category-name={"Gold"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Gold</span>
            </label>
            <label
              onClick={onMetalChange}
              data-category-name={"Silver"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Silver</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Metal color</h5>
            <button
              onClick={accordionAnimate}
              className="filter-parameter__button"
            ></button>
          </div>
          <div className="filter-parameter__container">
            <label
              onClick={onMetalColorChange}
              data-category-name={"White"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>White</span>
            </label>
            <label
              onClick={onMetalColorChange}
              data-category-name={"Yellow"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Yellow</span>
            </label>
            <label
              onClick={onMetalColorChange}
              data-category-name={"Red"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Red</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Product Type</h5>
            <button
              onClick={accordionAnimate}
              className="filter-parameter__button"
            ></button>
          </div>
          <div className="filter-parameter__container">
            <label
              onChange={onTypeChange}
              data-category-name={"bracelet"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Bracelet</span>
            </label>
            <label
              onChange={onTypeChange}
              data-category-name={"ring wedding-ring engagement-ring"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Ring</span>
            </label>
            <label
              onChange={onTypeChange}
              data-category-name={"earring child-earrings"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Earring</span>
            </label>
            <label
              onChange={onTypeChange}
              data-category-name={"cross"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Cross</span>
            </label>
            <label
              onChange={onTypeChange}
              data-category-name={"pendant"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Pendant</span>
            </label>
            <label
              onChange={onTypeChange}
              data-category-name={"pearl"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Pearl</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Product Status</h5>
            <button
              onClick={accordionAnimate}
              className="filter-parameter__button"
            ></button>
          </div>
          <div className="filter-parameter__container">
            <label
              onChange={onStatusChange}
              data-category-name={"BESTSELLER"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Bestseller</span>
            </label>
            <label
              onChange={onStatusChange}
              data-category-name={"OUTLET"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>Outlet</span>
            </label>
            <label
              onChange={onStatusChange}
              data-category-name={"NEW"}
              className="filter-parameter__checkbox"
            >
              <input type="checkbox" />
              <span>New Collection</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

AsideFilter.propTypes = {
  alreadyFilteredArray: PropTypes.array,
  filterRequest: PropTypes.func
};

export default AsideFilter;