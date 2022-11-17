import './style.scss';

import CategoryFilter from './components/CategoryFilter/CategoryFilter';

const CatalogSectionPage = () => {
  
  return (
    <div className="container">
      <div className="grid-wrapper">
      <div style={{backgroundColor: "red", width:'200px', height: '52px'}} className='breadcrumbs-wrapper'>Breadcrumbs</div>
      <div className="catalogPageImg-wrapper"><img src="img/catalogSectionPage/CategorySectionMainImg.jpg" alt="Category Section Main Imgage" /></div>
      <div style={{backgroundColor: "red", width:'300px', height: '800px'}} className='asideFilter-wrapper'>asideFilter</div>
      <div style={{backgroundColor: "grey",  height: '43px'}}className='filter-wrapper'>
        <CategoryFilter/>
      </div>
      <div style={{backgroundColor: "rgba(100, 85, 45, 0.5)", width:'850px', height: '510px'}}className='categoryCards-wrapper'>categoryCards container</div>
      <div style={{backgroundColor: "grey", width:'396px', height: '88px'}} className='paginnation-wrapper'>paginnation</div>
      </div>
    </div>
  );
};
export default CatalogSectionPage;