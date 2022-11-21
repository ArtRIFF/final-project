import './style.scss'

const OurAdvantageSection = () => {
  return (
    <section className="our-advantage-section">
      <div className="container">
        <h2 className="our-advantage-section__title">Why People Choose Us</h2>
        <div className="our-advantage-section__container">
          <div className="advantage-item">
            <img src="img/advantage-icon/advantage-icon__star.svg" alt="high quality icon star" className="advantage-item__img" />
            <h4 className="advantage-item__title">High Quality</h4>
            <p className="advantage-item__desc">
              All of our products go through very strict inspection before we dispatch them.
            </p>
          </div>
          <div className="advantage-item">
            <img src="img/advantage-icon/advantage-icon__weight.svg" alt="high quality icon star" className="advantage-item__img" />
            <h4 className="advantage-item__title">High Quality</h4>
            <p className="advantage-item__desc">
              All of our products go through very strict inspection before we dispatch them.
            </p>
          </div>
          <div className="advantage-item">
            <img src="img/advantage-icon/advantage-icon__customer.svg" alt="high quality icon star" className="advantage-item__img" />
            <h4 className="advantage-item__title">High Quality</h4>
            <p className="advantage-item__desc">
              All of our products go through very strict inspection before we dispatch them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAdvantageSection;