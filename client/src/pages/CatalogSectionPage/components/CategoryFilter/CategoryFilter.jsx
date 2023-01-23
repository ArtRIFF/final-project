import './style.scss';
import ButtonAll from '../../../../components/Button/ButtonAll/ButtonAll';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onClickFunc, setResult, filterRequest }) => {

  const sortByNewest = () => {
    filterRequest("sort=NEW");
  }

  const sortByBestseller = () => {
    filterRequest("sort=BESTSELLER");
  }

  const sortByPrice = () => {
    filterRequest("sort=currentPrice");
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
      <select data-testid='select-sortBy' onChange={onSelectorChange} name="select-sortBy" defaultValue={'DEFAULT'} >
        <option value="DEFAULT" disabled>Sort by</option>
        <option value="price">Price</option>
        <option value="newest">Newest</option>
        <option value="bestseller">Bestseller</option>
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