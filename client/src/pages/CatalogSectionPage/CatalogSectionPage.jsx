import './style.scss';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import AsideFilter from './components/AsideFilter/AsideFilter';

import { useState } from 'react';

const CatalogSectionPage = () => {

  const [showAsideFilter, setModalRender] = useState(false);
  const callAsideFilter = () => {
    setModalRender(true);
  }
  const hideAsideFilter = (event) => {
    const isFilterElement = !!event.target.closest('.asideFilter-wrapper--show');
    const isCallButton = !!event.target.closest('.category-filter--btn');
    if (event&&!isFilterElement&&!isCallButton) {
      setModalRender(false);
    }
  }
  return (
    <div className="container" onClick={hideAsideFilter} >
      <div className="grid-wrapper">
        <div className='breadcrumbs-wrapper'>
          <Breadcrumbs />
        </div>
        <div className="catalogPageImg-wrapper"><img src="img/catalogSectionPage/CategorySectionMainImg.jpg" alt="Category Section Main Imgage" /></div>
        <aside className={`${showAsideFilter?'asideFilter-wrapper--show': 'asideFilter-wrapper'}`}>
          <AsideFilter />
        </aside>
        <div className='filter-wrapper'>
          <CategoryFilter onClickFunc={callAsideFilter}/>
        </div>
        <div style={{backgroundColor: "rgba(100, 85, 45, 0.5)", width:'850px', height: '510px'}}className='categoryCards-wrapper'>categoryCards container</div>
      <div style={{backgroundColor: "grey", width:'396px', height: '88px'}} className='paginnation-wrapper'>paginnation</div>
      </div>
    </div>
  );
};
export default CatalogSectionPage;