import "./AboutUsPage.scss";
import Breadcrumbs from "../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs"

const AboutUs = () => {
    return (
        <>
            <section className="about__section">
                <div className="container">
                    <div className="breadcrumbs__aboutus">
                        <Breadcrumbs/>
                    </div>
                    <h2 className="section__title">ABOUT US</h2>
                    <p className="about__section-text">
                        WE ARE A TEAM OF YOUNG PROFESSIONALS.
                        We believe that the space in which we live should reflect our dreams and aspirations, and each of us has the power to create an admirable interior, in which it is pleasant to be and to which one always wants to return.
                        Our experience, striving for an integrated approach in everything, respect for the wishes of the client allow us to help you realize any of your ideas in real time for reasonable money.
                        We work directly with the best factories in Europe and the USA, producing furniture and interior items in the price segment "medium +", "high", "premium", which allows us to offer you the latest novelties at competitive prices. A large selection of products in stock and on order allow us to help you find worthy options within your budget.
                        We have already implemented a number of projects based on the principles:
                        An integrated approach is always effective.
                        There are no impossible tasks. We are always ready to offer solutions to even the most unconventional task.
                        It is important to balance the quality of the result, the timing of the project and the budget.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutUs;