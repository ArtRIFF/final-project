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
  const resetAllParam = () => {
   const checkboxElements = document.querySelectorAll('.filter-parameter__checkbox input');
   const inputElements = document.querySelectorAll('.price-container input');
   checkboxElements.forEach(checkbox => {
    checkbox.checked = false;
   })

   inputElements.forEach(input => {
    input.value = '';
    console.log(input);
   })
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
              <span>Vintage</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox"/>
              <span>Seabed</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Refinement</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Capsule</span>
            </label>
            <label className='filter-parameter__checkbox'>
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
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Without insertion</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pearl</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Zirconia</span>
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
              <span>Semi-precious</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Insert number</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container">
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>1</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>2</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>12</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>24</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>37</span>
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
            <label className='filter-parameter__checkbox'>
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
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Black rhodium</span>
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
              <span>Bracelet</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Necklace</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Ring</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Earring</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Cross</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pendant</span>
            </label>
            <label className='filter-parameter__checkbox'>
              <input type="checkbox" />
              <span>Pearl</span>
            </label>
          </div>
        </div>
        <div className="filter-parameter filter-parameter__hide">
          <div className="filter-parameter__header">
            <h5 className="filter-parameter__title">Size</h5>
            <button onClick={accordionAnimate} className="filter-parameter__button"></button>
          </div>
          <div className="filter-parameter__container price-container">
            <input type="text" placeholder='15' /><span>-</span>
            <input type="text" placeholder='24' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AsideFilter;