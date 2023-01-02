import "./ContactPage.scss";
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";

const Contact = () => {
    return (
        <>
                <section className="contact__section">
                    <div className="container">
                        <div className="breadcrumbs__contact">
                            <Breadcrumbs/>
                        </div>
                        <h2 className="contact__title">CONTACT</h2>
                        <p className="contact__section-title">
                            Do you want to know the details? Contact us by phone:
                        </p>
                        <a href="tel: +38 (044) 290 22 44">
                        <p className="contact__section-number">
                            +38 (044) 290 22 44
                        </p>
                        </a>
                        <p className="contact__section-title">
                            Or email us:
                        </p>
                        <a href="mailto: office@dan-it.com.ua">
                            <p className="contact__section-number">
                                office@dan-it.com.ua
                            </p>
                        </a>
                        <p className="contact__section-title">
                            Come to our showroom at:
                        </p>
                        <a href="https://goo.gl/maps/kWbeXSupcbgCj3to7">
                        <p className="contact__section-map">
                            Kyiv, Pavel Tychyna Ave., 1v, Silver Breeze shopping and entertainment center, office A, 6th floor
                        </p>
                        </a>
                    </div>
                </section>
        </>
    )
}

export default Contact;