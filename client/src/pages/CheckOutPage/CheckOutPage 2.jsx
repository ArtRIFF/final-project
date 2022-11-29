import React from 'react';
import './style.scss';
import ContactInfoPage from'./ContactInfo/ContactInfo';
import Header from '../../components/Header/Header'
import PaymentMethod from './PaymentMethod/PaymentMethod';
import ShipAddress from './ShipAddress/ShipAddress';
import Footer from '../../components/Footer/Footer';

const CheckOutPage = () => {
    return (
        <section className=''>
        <Header/>
        <ContactInfoPage/>
        <ShipAddress/>
        <PaymentMethod/>
        <Footer/>
        </section>
    )
}
export default CheckOutPage;