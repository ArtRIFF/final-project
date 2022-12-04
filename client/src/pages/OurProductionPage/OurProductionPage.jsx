import { NavLink } from 'react-router-dom';
import OurProductionText from "./OurProductionText/OurProductionText";
import OurProductionMap from "./OurProductionMap/OurProductionMap";
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";

import "./OurProductionPage.scss";

const OurProductionPage = () => {
    return (
        <>  
        <div className='our_production'>
            <Breadcrumbs />
            <NavLink to="/our_production" className="container">
                <OurProductionText />
                <OurProductionMap/>
            </NavLink>
        </div>
        </>
    )
}

export default OurProductionPage;
