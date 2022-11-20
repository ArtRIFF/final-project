import './style.scss';
import ButtonAll from '../../../../components/Button/BattonAll/ButtonAll';
import PropTypes from 'prop-types';

const CategoryFilter = ({onClickFunc}) => {

  return (
    <div className="category-filter">
      <div onClick={onClickFunc} className='category-filter--btn'>
      <ButtonAll text='Filter' className='section__btn-subscribe' />
      </div>
      <div className='category-filter__result'>Results: <span>122</span></div>
        <select name="select-sortBy" defaultValue={'DEFAULT'} >
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