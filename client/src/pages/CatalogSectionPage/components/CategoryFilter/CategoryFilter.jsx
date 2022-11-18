import './style.scss';

const CategoryFilter = () => {

  return (
    <div className="category-filter">
      <div>Results: <span>122</span></div>
      <div>
        <select name="select-sortBy" defaultValue={'DEFAULT'} >
          <option value="DEFAULT" disabled>Sort by</option>
          <option value="price">Price</option>
          <option value="newest">Newest</option>
          <option value="bestseller">Bestseller</option>
        </select>
      </div>
    </div>
  );
};
export default CategoryFilter;