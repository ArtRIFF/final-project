import './style.scss';

import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

const CatalogSectionPage = () => {

  return (
    <div className="container">
      <div className="grid-wrapper">
        <div className='breadcrumbs-wrapper'>
          <Breadcrumbs />
        </div>
        <div className="catalogPageImg-wrapper"><img src="img/catalogSectionPage/CategorySectionMainImg.jpg" alt="Category Section Main Imgage" /></div>
        <div style={{ backgroundColor: "red", width: '300px', height: '800px' }} className='asideFilter-wrapper'>asideFilter</div>
        <div style={{ backgroundColor: "grey", width: '100%', height: '43px' }} className='filter-wrapper'>filter</div>
        <div style={{ backgroundColor: "rgba(100, 85, 45, 0.5)", width: '700px', height: '510px' }} className='categoryCards-wrapper'>categoryCards container</div>
        <div style={{ backgroundColor: "grey", width: '396px', height: '88px' }} className='paginnation-wrapper'>paginnation</div>
      </div>
    </div>
  );
};
export default CatalogSectionPage;