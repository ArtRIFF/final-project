import './style.scss';

const AsideFilter = () => {

  return (
    <div className="aside-filter">
      <div className='aside-filter__header'>
        <h3 className="aside-filter__title">Filters</h3>
        <button className="aside-filter__button">Reset all</button>
      </div>
      <div>
        {/* <select name="select-sortBy">
          <option value="default" selected>Sort by</option>
          <option value="price">Price</option>
          <option value="newest">Newest</option>
          <option value="bestseller">Bestseller</option>
        </select> */}
      </div>
    </div>
  );
};
export default AsideFilter;