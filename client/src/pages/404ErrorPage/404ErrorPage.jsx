import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './404ErrorPage.scss';

const ErrorPage = () => {
    return (
        <>
        <Header />
        <div className='error__page container'>
            <a href="#" >
                <img 
                src="img/404/vecteezy_404.jpg" 
                alt="404_Error" 
                className='error__img'/>
            </a>
        </div>
        <Footer />
        </>
    )
}


export default ErrorPage;