import './style.scss';
import ButtonAll from '../../../../components/Button/ButtonAll/ButtonAll';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const CategoryFilter = ({ onClickFunc, setResult, filterRequest }) => {
  const url = window.location.search; 
  const params = new URLSearchParams(url);
  const sortParam = params.get('sort');
  
  const [sortType, setSortType] = useState(sortParam || null);
 

  useEffect(()=>{
    if (sortType) {
      filterRequest("sort="+ sortType);
      document.querySelector('.category-filter select').value = sortType;
    }

  },[sortType])

  const sortByNewest = () => {
    setSortType("date");
  }

  const sortByBestseller = () => {
    setSortType("BESTSELLER");
  }

  const sortByPrice = () => {
    setSortType("currentPrice");
  }

  const onSelectorChange = (e) => {
    switch (e.target.value) {
      case "currentPrice":
        sortByPrice();
        break;
      case "date":
        sortByNewest();
        break;
      case "BESTSELLER":
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
      <select data-testid='select-sortBy' onChange={onSelectorChange} name="select-sortBy" defaultValue={'DEFAULT'} >
        <option value="DEFAULT" disabled>Sort by</option>
        <option value="currentPrice">Price</option>
        <option value="date">Newest</option>
        <option value="BESTSELLER">Bestseller</option>
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onClickFunc: PropTypes.func,
  setResult: PropTypes.number,
  filterRequest: PropTypes.func
};

CategoryFilter.defaultProps = {
  onClickFunc: null
};

export default CategoryFilter;