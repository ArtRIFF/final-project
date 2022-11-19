import './style.scss';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import AsideFilter from './components/AsideFilter/AsideFilter';

const CatalogSectionPage = () => {
  
  return (
    <div className="container">
      <div className="grid-wrapper">
      <div className='breadcrumbs-wrapper'>
          <Breadcrumbs />
        </div>
      <div className="catalogPageImg-wrapper"><img src="img/catalogSectionPage/CategorySectionMainImg.jpg" alt="Category Section Main Imgage" /></div>
      <aside style={{backgroundColor: "olive", width:'300px'}} className='asideFilter-wrapper'>
        <AsideFilter/>
      </aside>
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