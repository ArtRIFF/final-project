import './style.scss';

const AsideFilter = () => {
  const accordionAnimate = (e) => {
    e.target.closest('.filter-parameter').classList.toggle('filter-parameter__show');
    const container = e.target.closest('.filter-parameter').children[1];
    if (container.style.maxHeight) {
      container.style.maxHeight = null;
    } else {
      container.style.maxHeight = container.scrollHeight + "px";
    }
  }
  return (
    <div className="aside-filter">
      <div className='aside-filter__header'>
        <h3 className="aside-filter__title">Filters</h3>
        <button className="aside-filter__button">Reset all</button>
      </div>
      <div className='aside-filter__wrapper'>
        <div className="filter-parameter filter-parameter__show">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Product Type</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input  type="checkbox"  />
              <span>Bracelets</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input  type="checkbox"  />
              <span>Necklace</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input  type="checkbox"  />
              <span>Rings</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input  type="checkbox"  />
              <span>Earrings</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input  type="checkbox"  />
              <span>Chains</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input  type="checkbox"  />
              <span>Brooches</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input  type="checkbox"  />
              <span>Hairpins</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AsideFilter;