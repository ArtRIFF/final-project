import "./NewsSection.scss";
import Button from "../Button/ButtonAll/ButtonAll";

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-section-container">
          <div className="news-section__icon">
            <img
              src="img/news-section/body.png"
              alt="sorry, we've lost this pic but trying to bring it back"
              className="news-section__body"
            />
            <img
              src="img/news-section/hand.png"
              alt="sorry, we've lost this pic but trying to bring it back"
              className="news-section__hand"
            />
          </div>
          <div className="news-section__info">
            <h2 className="news-section__title">New Collection</h2>
            <div className="news-section__summary">
              <div className="news-section__summary_margin">
                <i className="news-section__summary_red">Breeze</i> - a collection
                of variability. That we adapt to circumstances just like water
                adapts to wind currents.
                <i className="news-section__summary_red">
                  Adaptation is an important human skill.
                </i>
              </div>
              <div className="news-section__summary_margin">
                Sometimes the mood is calm, like a sea surface, and sometimes it is
                stormy. But as soon as the storm subsides, thoughts{" "}
                <i className="news-section__summary_red">fly to the shores</i> in a
                breeze - to where it is cozy and carefree. Where a ring of yellow
                gold with mother-of-pearl makes sense.
              </div>
              <div className="news-section__summary_margin">
                After all, the {"  "}
                <i className="news-section__summary_red">
                  details become noticeable{"  "}
                </i>
                when significant problems subside. And we dream that thanks to this
                jewelry story you will feel the ease of life.
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
