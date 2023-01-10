import "./OurProductionMap.scss";

const OurProductionMap = () => {
    return (
      <>
        <div className="production__map-section container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6927636817304!2d30.590786115730616!3d50.428195679472374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57deccaada1%3A0xa5e7cf7c9f8ff18b!2sDAN.IT!5e0!3m2!1sru!2sua!4v1669982880687!5m2!1sru!2sua"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </>
    );
}

export default OurProductionMap;
