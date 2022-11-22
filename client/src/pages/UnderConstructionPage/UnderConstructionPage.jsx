import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './UnderConstructionPage.scss';

const UnderConstractionPage = () => {
    return (
        <>
        <Header />
        <div className='under__construction-page container'>
            <a href="#" >
                <img 
                src="img/UnderConstruction/under-construction-illustration.svg" 
                alt="Under_Consruction" 
                className='under_consruction-img'/>
            </a>
        </div>
        <Footer />
        </>
    )
}


export default UnderConstractionPage;