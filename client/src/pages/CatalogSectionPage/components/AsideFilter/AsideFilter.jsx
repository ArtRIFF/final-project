import './style.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AsideFilter = ({ filterRequest }) => {
  const url = window.location.search;
  const params = new URLSearchParams(url);

  const categoriesParam = params.get('categories')?.split(",");
  const metalParam = params.get('metal')?.split(",");
  const collectionParam = params.get('collectionName')?.split(",");
  const sampleParam = params.get('sample')?.split(",");
  const metalColorParam = params.get('metalColor')?.split(",");
  const insertTypeParam = params.get('insertType')?.split(",");
  const priceParam = params.get('price')?.split(",");
  const insertNumberParam = params.get('insertNumber')?.split(",");

  const [productsType, setProductsType] = useState(categoriesParam || []);
  const [metalType, setMetalType] = useState(metalParam || []);
  const [collectionType, setCollectionType] = useState(collectionParam || []);
  const [sampleType, setSampleType] = useState(sampleParam || []);
  const [metalColorType, setMetalColorType] = useState(metalColorParam || []);
  const [insertType, setInsertType] = useState(insertTypeParam || []);
  const [price, setPrice] = useState(priceParam || ['', '']);
  const [insertNumber, setInsertNumber] = useState(insertNumberParam || 0);

  useEffect(() => {
    updateFilter();
    const value = document.querySelectorAll('.filter-parameter__checkbox');
    value.forEach(item => {

      productsType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector('input').checked = true;
        }
      });

      metalType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector('input').checked = true;
        }
      });

      collectionType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector('input').checked = true;
        }
      });

      sampleType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector('input').checked = true;
        }
      });

      metalColorType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector('input').checked = true;
        }
      });

      insertType.forEach((param) => {
        if (item.dataset.categoryName === param) {
          item.querySelector('input').checked = true;
        }
      });
    })

  }, [productsType, metalType, collectionType, sampleType, metalColorType, insertType, price, insertNumber]);

  const updateFilter = () => {
    let filterParamArray = [];

    const pushToFilterParamArray = (param) => {
      if (param) {
        filterParamArray.push(param);
      }
    }

    const productsTypeParam = productsType.length ? `categories=${productsType.join(',')}` : "";
    pushToFilterParamArray(productsTypeParam);
    const metalTypeParam = metalType.length ? `metal=${metalType.join(',')}` : "";
    pushToFilterParamArray(metalTypeParam);
    const collectionTypeParam = collectionType.length ? `collectionName=${collectionType.join(',')}` : "";
    pushToFilterParamArray(collectionTypeParam);
    const sampleTypeParam = sampleType.length ? `sample=${sampleType.join(',')}` : "";
    pushToFilterParamArray(sampleTypeParam);
    const metalColorTypeParam = metalColorType.length ? `metalColor=${metalColorType.join(',')}` : "";
    pushToFilterParamArray(metalColorTypeParam);
    const insertTypeParam = insertType.length ? `insertType=${insertType.join(',')}` : "";
    pushToFilterParamArray(insertTypeParam);
    const insertNumberParam = insertNumber !== 0 ? `insertNumber=${insertNumber}` : "";
    pushToFilterParamArray(insertNumberParam);
    const priceRangeParam = (price[0] !== "" || price[1] !== "") ? `price=${price[1] !== "" ? `${price[0]}-${price[1]}` : `${price[0]}`}` : "";
    pushToFilterParamArray(priceRangeParam);

    const filterParam = filterParamArray.length ? `${filterParamArray.join('&')}` : "";
    filterRequest(filterParam);
  };

  const onTypeChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest('.filter-parameter__checkbox').dataset.categoryName;
    const arrayValue = value.split(' ');
    if (arrayValue.length > 1) {
      arrayValue.forEach(() => {
        setProductsType((!productsType.includes(arrayValue[0]) && checked)
          ? [...productsType, ...arrayValue]
          : productsType.filter(n => !arrayValue.includes(n))
        );
      })
    } else {
      setProductsType((!productsType.includes(value) && checked)
        ? [...productsType, value]
        : productsType.filter(n => n !== value)
      );
    }
  };

  const onMetalChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest('.filter-parameter__checkbox').dataset.categoryName;
    setMetalType((!metalType.includes(value) && checked)
      ? [...metalType, value]
      : metalType.filter(n => n !== value)
    );
  };

  const onCollectionChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest('.filter-parameter__checkbox').dataset.categoryName;
    setCollectionType((!collectionType.includes(value) && checked)
      ? [...collectionType, value]
      : collectionType.filter(n => n !== value)
    );
  };

  const onSampleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest('.filter-parameter__checkbox').dataset.categoryName;
    setSampleType((!sampleType.includes(value) && checked)
      ? [...sampleType, value]
      : sampleType.filter(n => n !== value)
    );
  };

  const onMetalColorChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest('.filter-parameter__checkbox').dataset.categoryName;
    setMetalColorType((!metalColorType.includes(value) && checked)
      ? [...metalColorType, value]
      : metalColorType.filter(n => n !== value)
    );
  };

  const onInsertChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest('.filter-parameter__checkbox').dataset.categoryName;
    setInsertType((!insertType.includes(value) && checked)
      ? [...insertType, value]
      : insertType.filter(n => n !== value)
    );
  };

  const onPriceChange = ({ target: { value, dataset: { index } } }) => {
    setPrice(price.map((n, i) => i === +index ? value : n));
  };

  const onInsertNumberChange = ({ target: { value } }) => {
    setInsertNumber(+value);
  };

  const accordionAnimate = (e) => {
    const panels = [...e.target.closest('.aside-filter__wrapper').children];
    const indexTargetElem = panels.indexOf(e.target.closest('.filter-parameter'));
    panels.forEach((panel, i) => {
      if (i !== indexTargetElem && !panel.classList.contains('filter-parameter__hide')) {
        let panelContainer = panel.closest('.filter-parameter').children[1];
        panel.classList.add('filter-parameter__hide');
        panelContainer.style.maxHeight = null;
      }
    })

    e.target.closest('.filter-parameter').classList.toggle('filter-parameter__hide');
    const container = e.target.closest('.filter-parameter').children[1];
    if (container.style.maxHeight) {
      container.style.maxHeight = null;
    } else {
      container.style.maxHeight = container.scrollHeight + "px";
    }

  }

  const resetAllParam = () => {
    const checkboxElements = document.querySelectorAll('.filter-parameter__checkbox input');
    const inputElements = document.querySelectorAll('.price-container input');
    checkboxElements.forEach(checkbox => {
      checkbox.checked = false;
    })

    inputElements.forEach(input => {
      input.value = '';
    })

    setCollectionType([]);
    setProductsType([]);
    setMetalType([]);
    setSampleType([]);
    setMetalColorType([]);
    setInsertType([]);
    setPrice(['', '']);
    setInsertNumber(0);

    updateFilter([]);
  }

  return (
    <div className="aside-filter">
      <div className='aside-filter__header'>
        <h3 className="aside-filter__title">Filters</h3>
        <button onClick={resetAllParam} className="aside-filter__button">Reset all</button>
      </div>
      <div className='aside-filter__wrapper'>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Price</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container price-container">
            <input onChange={onPriceChange} data-index={0} value={price[0]} type="text" placeholder={price[0] ? price[0] : "0"} />
            <span>-</span>
            <input onChange={onPriceChange} data-index={1} value={price[1]} type="text" placeholder={price[1] ? price[1] : "20000"} />
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Collection</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label onClick={onCollectionChange} data-category-name={'vintage'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Vintage</span>
            </label>
            <label onClick={onCollectionChange} data-category-name={'seabed'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Seabed</span>
            </label>
            <label onClick={onCollectionChange} data-category-name={'refinement'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Refinement</span>
            </label>
            <label onClick={onCollectionChange} data-category-name={'capsule'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Capsule</span>
            </label>
            <label onClick={onCollectionChange} data-category-name={'max spass'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Max Spass</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Insert</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label onClick={onInsertChange} data-category-name={'Without inserting'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Without insertion</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'pearl'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pearl</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'zirconia'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Zirconia</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'diamond'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Diamond</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'Pearl and diamonds'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pearl and diamonds</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'semi-precious'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Semi-precious</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'nacre'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Nacre</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'amethyst'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Amethyst</span>
            </label>
            <label onClick={onInsertChange} data-category-name={'onixl'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Onixl</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Insert number</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container price-container">
            <input onChange={onInsertNumberChange} value={insertNumber} type="text" placeholder={insertNumber ? insertNumber : "0"} />
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Metal</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label onClick={onMetalChange} data-category-name={'Gold'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Gold</span>
            </label>
            <label onClick={onMetalChange} data-category-name={'Silver'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Silver</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Metal color</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label onClick={onMetalColorChange} data-category-name={"White"} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>White</span>
            </label>
            <label onClick={onMetalColorChange} data-category-name={"Yellow"} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Yellow</span>
            </label>
            <label onClick={onMetalColorChange} data-category-name={"Red"} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Red</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Sample</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label onClick={onSampleChange} data-category-name={575} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>575</span>
            </label>
            <label onClick={onSampleChange} data-category-name={585} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>585</span>
            </label>
            <label onClick={onSampleChange} data-category-name={750} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>750</span>
            </label>
            <label onClick={onSampleChange} data-category-name={958} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>958</span>
            </label>
            <label onClick={onSampleChange} data-category-name={985} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>985</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Product Type</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label onChange={onTypeChange} data-category-name={'bracelet'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Bracelet</span>
            </label>
            <label onChange={onTypeChange} data-category-name={'ring wedding-ring engagement-ring'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Ring</span>
            </label>
            <label onChange={onTypeChange} data-category-name={'earring child-earrings'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Earring</span>
            </label>
            <label onChange={onTypeChange} data-category-name={'cross'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Cross</span>
            </label>
            <label onChange={onTypeChange} data-category-name={'pendant'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pendant</span>
            </label>
            <label onChange={onTypeChange} data-category-name={'pearl'} className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pearl</span>
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