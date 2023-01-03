import './style.scss';
import ButtonAll from '../../../../components/Button/ButtonAll/ButtonAll';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onClickFunc, setResult, filterRequest, allCollectionArray,hasAnyFilters }) => {

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
    const dontHaveResult = !setResult && hasAnyFilters;
    if (!dontHaveResult) {
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
  }
  };
  return (
    <div className="category-filter">
      <div onClick={onClickFunc} className='category-filter--btn'>
        <ButtonAll text='Filter' className='section__btn-subscribe' />
      </div>
      <div className='category-filter__result'>Results: <span>{!setResult && hasAnyFilters?setResult:allCollectionArray.length}</span></div>
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
  onClickFunc: null,
  hasAnyFilters: true
};

export default CategoryFilter;