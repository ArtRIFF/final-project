import './style.scss';
import { useState, useEffect } from 'react';

const AsideFilter = ({ allCollectionArray, filterRequest, checkResult }) => {
  const [productsType, setProductsType] = useState([]);
  const [metalType, setMetalType] = useState([]);
  const [collectionType, setCollectionType] = useState([]);
  const [sampleType, setSampleType] = useState([]);
  const [metalColorType, setMetalColorType] = useState([]);
  const [insertType, setInsertType] = useState([]);
  const [price, setPrice] = useState(['', '']);
  const [insertNumber, setInsertNumber] = useState(0);

  let hasAnyFilters;
  useEffect(() => {
    if (
      productsType.length !== 0 ||
      metalType.length !== 0 ||
      collectionType.length !== 0 ||
      sampleType.length !== 0 ||
      metalColorType.length !== 0 ||
      insertType.length !== 0 ||
      price[0] !== "" ||
      price[1] !== "" ||
      insertNumber !== 0
    ) {
      hasAnyFilters = Boolean(true);
    } else {
      hasAnyFilters = Boolean(false);
    }
  }, [
    productsType,
    metalType,
    collectionType,
    sampleType,
    metalColorType,
    insertType,
    price,
    insertNumber,
  ]);

  useEffect(() => {
    updateFilter();
  }, [productsType]);

  useEffect(() => {
    updateFilter();
  }, [metalType]);

  useEffect(() => {
    updateFilter();
  }, [collectionType]);

  useEffect(() => {
    updateFilter();
  }, [sampleType]);

  useEffect(() => {
    updateFilter();
  }, [metalColorType]);

  useEffect(() => {
    updateFilter();
  }, [insertType]);

  useEffect(() => {
    updateFilter();
  }, [price]);

  useEffect(() => {
    updateFilter();
  }, [insertNumber]);


  const updateFilter = () => {
    const newArray = allCollectionArray.filter(n => (
      (
        (!productsType.length || productsType.includes(n.categories))
        && (!metalType.length || metalType.includes(n.metal))
        && (!collectionType.length || collectionType.includes(n.collectionName))
        && (!sampleType.length || sampleType.includes((typeof n.sample === 'undefined' ? n.sample : (n.sample).toString())))
        && (!metalColorType.length || metalColorType.includes(n.metalColor))
        && (!insertType.length || insertType.includes(n.insertType))
        && (!price[0] || price[0] <= n.currentPrice)
        && (!price[1] || price[1] >= n.currentPrice)
        && (!insertNumber || insertNumber === n.insertNumber)
      )
    ));
    document.querySelector('.category-filter select').value = "DEFAULT";
    filterRequest(newArray, hasAnyFilters);
  };

  const onTypeChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.closest('.filter-parameter__checkbox').dataset.categoryName;
    const arrayValue = value.split(' ');
    if (arrayValue.length > 1) {
      arrayValue.forEach(valueItem => {
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
            <input onChange={onPriceChange} data-index={0} value={price[0]} type="text" placeholder='51' />
            <span>-</span>
            <input onChange={onPriceChange} data-index={1} value={price[1]} type="text" placeholder='214453' />
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
            <input onChange={onInsertNumberChange} value={insertNumber} type="text" placeholder='1' />
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
export default AsideFilter;