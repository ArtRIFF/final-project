import './UnderConstructionPage.scss';
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs"

const UnderConstractionPage = () => {
    return (
        <div className='container'>
        <div className="breadcrumbs__constract">
            <Breadcrumbs/>
        </div>
        <div className='under__construction-page'>
            <a href="#" >
                <img 
                src="img/UnderConstruction/under-construction-illustration.svg" 
                alt="Under_Consruction" 
                className='under_consruction-img'/>
            </a>
        </div>
        </div>
    )
}


export default UnderConstractionPage;