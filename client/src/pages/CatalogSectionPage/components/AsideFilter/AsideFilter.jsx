import './style.scss';

const AsideFilter = () => {
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
  return (
    <div className="aside-filter">
      <div className='aside-filter__header'>
        <h3 className="aside-filter__title">Filters</h3>
        <button className="aside-filter__button">Reset all</button>
      </div>
      <div className='aside-filter__wrapper'>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Price</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container price-container">
            <input type="text" placeholder='51' /><span>-</span>
            <input type="text" placeholder='214453' />
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Collection</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>UNITED24</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Easyen</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>TOKYOen</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Sophieen</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Bloomen</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>First Loveen</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Smart & Beautifulen</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Poweren</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Insert</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Without insertion</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Amethyst</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Australian opal</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Diamond</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pearls cultivated</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Rubber</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Ceramics</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Leather</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pearl</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Cub.zirconium</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Insert color</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>White</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Colorless</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Boulder opal</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Light blue</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Yellow</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Red</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pink</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Blue</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Fantasy</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Purple</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Black</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Metal</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Steel</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Gold</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Metal color</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>White</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Yellow</span>
            </label>
            <label className='filter-parameter__checkbox'>
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
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>375</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>585</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>750</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>958</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Product Type</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Bracelets</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Necklace</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Rings</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Earrings</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Chains</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Brooches</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Hairpins</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Size</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>20</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>160</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>165</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>170</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>175</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>180</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>185</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AsideFilter;