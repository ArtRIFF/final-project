import './style.scss'

/* FIXME button to be changed later by the Button component done by A.Myroshnychenko */

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <div className="container">
        <h2 className="subscribe-section__title">Subscribe to our Newsletter</h2>
        <div className="subscribe-section__container">
          <p className="subscribe-section__text">We promise to be polite and not bore you</p>
          <div className="subscribe-section__input">
            <input className="subscribe-section__input-email" type="email" placeholder="Your email"/>
            <button type="submit" className="subscribe-section__input-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;