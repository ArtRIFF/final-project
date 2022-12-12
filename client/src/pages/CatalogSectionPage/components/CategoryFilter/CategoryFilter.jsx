import './style.scss';
import ButtonAll from '../../../../components/Button/BattonAll/ButtonAll';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const CategoryFilter = ({ onClickFunc, setResult, filterRequest, allCollectionArray }) => {

  const sortByNewest = () => {
    const sortedArray = allCollectionArray.slice().sort((a, b) => {
      if (a.statusProduct === "NEW") {
        return -1;
      } else {
        return 1;
      }
    });
    filterRequest(sortedArray);
  }

  const sortByBestseller = () => {
    const sortedArray = allCollectionArray.slice().sort((a, b) => {
      if (a.statusProduct === "BESTSELLER") {
        return -1;
      } else {
        return 1;
      }
    });
    filterRequest(sortedArray);
  }

  const sortByPrice = () => {
    const sortedArray = allCollectionArray.slice().sort((a, b) => (+a.currentPrice) - (+b.currentPrice));
    filterRequest(sortedArray);
  }

  const onSelectorChange = (e) => {
    switch (e.target.value) {
      case "price":
        sortByPrice();
        break;
      case "newest":
        sortByNewest();
        break;
      case "bestseller":
        sortByBestseller();
        break;
    }
  };
  return (
    <div className="category-filter">
      <div onClick={onClickFunc} className='category-filter--btn'>
        <ButtonAll text='Filter' className='section__btn-subscribe' />
      </div>
      <div className='category-filter__result'>Results: <span>{setResult}</span></div>
      <select onChange={onSelectorChange} name="select-sortBy" defaultValue={'DEFAULT'} >
        <option value="DEFAULT" disabled>Sort by</option>
        <option value="price">Price</option>
        <option value="newest">Newest</option>
        <option value="bestseller">Bestseller</option>
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onClickFunc: PropTypes.func
};

CategoryFilter.defaultProps = {
  onClickFunc: null
};

export default CategoryFilter;